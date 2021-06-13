import {Ref, ref} from "vue"

// Тип данных для получаемоего значения fetch
// Promise так как fetch его возвращает
type ApiRequest = () => Promise<void>

// Поле Request - значение fetch
// Поле Response - generic vue ref, undefined пока не получены данные с сервера
// Generic обобщение которое подстраивает тип заменяя все Generic(Например "T") на тип вводимой переменной
// Отличие от Any заключается в том что any может пустить на вход number, а выпустить string
// Generic этого не сделает так как заменить всё на один опредленный тип
interface FetchApi<T> {
    request: ApiRequest
    response: Ref<T | undefined>
}

// Создание метода с fetch запросом и generic типом
export  function useFetch<T>(url: RequestInfo, args?: RequestInit): FetchApi<T> {

    // Переменная хранящая результат запроса
    const response = ref<T>()

    // Метод запроса
    const request: ApiRequest = async () => {
        const serverData = await fetch(url, args)
        response.value = await serverData.json()
    }

    // Возврат значений как описано в интерфейсе FetchApi
    return {request, response}

}



