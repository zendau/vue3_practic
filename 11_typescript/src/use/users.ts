import {ref, Ref} from 'vue'
import {useFetch} from "./fetch"

// Создание интерфейса, какими должыми быть получаемые данные
interface User {
    name: string
    id: string
  }
  
// Тип данных выходного значения функции, на выходе должен быть объект с массивами User или undefined
export type UsableUsers = Promise<{users: Ref<User[] | undefined>}>


export async function useUsers() : UsableUsers {
    // Статус получения данных
    const loadStatus = ref<boolean>(false)

    // Получения значений из useFetch
    const {request, response: users} = useFetch<User[]>("https://jsonplaceholder.typicode.com/users")

    // Вызов метода если он не был вызван
    if (!loadStatus.value) {
        loadStatus.value = true
        await request()
    }

    // Возвращение результата
    return {users}

}
