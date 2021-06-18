import { createStore } from 'vuex'

import auth  from "./auth"
import requests from "./requests"

export default createStore({
 modules: {
    auth,
    requests
 }
})

