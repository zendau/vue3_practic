import { useField, useForm } from 'vee-validate';
import { Router } from 'vue-router';
import { Store } from 'vuex';
import * as yup from 'yup';

export default function(store : Store<any>, router : Router) {
    const {handleSubmit} = useForm()
    const {errorMessage: eLogin, value: vLogin} = useField("login", yup.string().required().min(6).max(20).trim())
    const {errorMessage: ePass, value: vPass} = useField("pass", yup.string().required().min(6).max(20).trim())

    const onSubmit = handleSubmit(formData => {

        store.dispatch("auth/authUser", {
            login: formData.login,
            password: formData.pass
        })

        router.push("/requests")
        
    })

    return {
        eLogin,
        vLogin,
        vPass,
        ePass,
        onSubmit
    }
}


