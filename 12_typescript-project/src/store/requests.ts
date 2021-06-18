import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

type requestData = {
  id: string | null,
  name: string | null,
  phone: string | null,
  sum: number | null,
  status: string | null
}


interface IRequests {
  requests : requestData[],
  currentRequest: requestData
}


type changeStatus = {
  id: string,
  status: string
}


@Module({namespaced: true})
export default class Requests extends VuexModule implements IRequests {
  
  requests : requestData[] = []
  currentRequest : requestData = {
    id: null,
    name: null,
    phone: null,
    sum: null,
    status: null
  }

  @Mutation
  saveRequests(requests: requestData[]) {
    this.requests = requests
  }

  @Mutation
  pushRequest(request: requestData) {
    this.requests.push(request)
  }

  @Mutation
  saveNewUserData(newRequests : requestData[]) {
    this.requests = newRequests
  }

  @Action({commit: "saveNewUserData"})
  changeUserStatus(data: changeStatus) {
    const newReqs =  this.requests.map(item => {
      if (item.id === data.id) {
        item.status = data.status
      }
      return item
    })
    localStorage.setItem("requests", JSON.stringify(newReqs))

    return newReqs
  }

  @Action({commit: "saveNewUserData"})
  deleteUser(id: string) {
    const newReqs =  this.requests.filter(item => item.id !== id)
    localStorage.setItem("requests", JSON.stringify(newReqs))

    return newReqs
  }

  @Action({commit: "saveRequests"})
  getRequests() {
    const reqs =  localStorage.getItem('requests')
    if (reqs === null) {
      localStorage.setItem("requests", "[]")
      return []
    } else if (typeof reqs === "string") {
      return JSON.parse(reqs)
    }
  }

  @Action({commit: "pushRequest"})
  saveRequest(reqData: requestData) {
    const request =  localStorage.getItem('requests')
    if (request !== null) {
      const data = JSON.parse(request)
      reqData.id = Math.random().toString(16).slice(2)
      data.push(reqData)
      localStorage.setItem("requests", JSON.stringify(data))
      return reqData
    }
  }

  get getReqs() {
    return this.requests
  }
  
  @Mutation
  selectOneRequest(id: string) {
    this.currentRequest = this.requests.filter(item => item.id === id)[0] 
  }

  get oneRequest() {
    return this.currentRequest
  }

  
}