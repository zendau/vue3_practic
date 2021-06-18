import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

type userObject = {
  login: string | null,
  password: string | null
}


interface IAuth {
  authStatus : boolean,
  userData : userObject
}



@Module({namespaced: true})
export default class Auth extends VuexModule implements IAuth {
  
  authStatus = false
  userData : userObject = {
    login: null,
    password: null
  }

  @Mutation
  saveUserData(data: userObject) {
    this.userData = data
    this.authStatus = !this.authStatus
  }

  @Action({commit: "saveUserData"})
  authUser(userData: userObject) {
    return userData
  }

  @Action({commit: "saveUserData"})
  exitUser() {
    return {
      login: null,
      password: null
    }
  }

  get userStatus() {
    return this.authStatus
  }
}