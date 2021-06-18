import { useField, useForm } from 'vee-validate';
import { Router } from 'vue-router';
import { Store } from 'vuex';
import * as yup from 'yup';

export default function(store : Store<any>) {


    const {handleSubmit} = useForm()
    const {errorMessage: eName, value: vName} = useField("name", yup.string().required().min(4).max(20).trim())
    const {errorMessage: ePhone, value: vPhone} = useField("phone", yup.string().required().min(14).max(14).trim())
    const {errorMessage: eSum, value: vSum} = useField("sum", yup.string().required().min(1).max(20).trim())
    const {errorMessage: eStatus, value: vStatus} = useField("status", yup.string().required())

    const onSubmit = handleSubmit(formData => {

        store.dispatch("requests/saveRequest", {
            name: formData.name,
            phone: formData.phone,
            sum: formData.sum,
            status: formData.status
        })

        vName.value = ""
        vPhone.value = ""
        vSum.value = ""
        vStatus.value = ""
        
    })

    function inputNumber() {
        if (vPhone.value !== undefined) {
            const x = vPhone.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
            if (x !== null) {
                vPhone.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
            }
        }
    }

    return {
        onSubmit,
        inputNumber,
        vPhone,
        vStatus,
        vSum,
        vName,
        ePhone,
        eStatus,
        eSum,
        eName
    }
}


