<template>
  <div>
    <div class="card">
        <p>a - {{a}}</p>
        <p>b - {{b.one}}</p>
        <p>c - {{c[0]}}</p>
        <p ref="root">Computet - {{computedValue}}</p>
        <button @click="a = 3">a</button>
        <button @click="b.one = 4">b</button>
        <button @click="c[0] = 'heelo'">c</button>
        <button @click="chgA">change a</button>
        <button @click="chgB">change b</button>
        <input type="text" v-model="vModel" placeholder="your v-model value">
        <SandboxView :title="a" @callToParent="messageFromChildren"></SandboxView>
    </div>
  </div>
</template>

<script>

import {
    ref, 
    reactive, 
    onMounted, 
    computed, 
    watch,
    provide
    } from "vue"

import {useRoute, useRouter} from "vue-router"
import {useStore} from "vuex"

import SandboxView from "../views/sandboxView"

export default {
    
    components: {
        SandboxView
    },
    setup() {
        const a = ref("one")
        const b = reactive({
            one: "two"
        })

        const c = reactive(["testC"])
        const root = ref(null)

        const vModel = ref("")

        const route = useRoute()
        const router = useRouter()
        const store = useStore()

        onMounted(()=>{
            console.log(a)
            console.log(b)
            console.log(root.value)
            root.value.style.color = "blue"

            console.log("route", route)
            console.log("router", router)
            console.log("store", store)
            
        }) 

        function chgA() {
            a.value = "change a"
        }

        function chgB() {
            b.one = "change b"
        }

        const computedValue = computed(() => b.one + " COMPUTET")

        watch(a, (a, aPrev) => {
            console.log(a)
            console.log(aPrev)
        })

        watch(vModel, (val, old) => {
            console.log("new",val)
            console.log("old",old)
        })


        function messageFromChildren(arg) {
            vModel.value = arg
        }

        provide("valueFromProvide", vModel)


        return {
            a,
            b,
            c,
            chgA,
            chgB,
            computedValue,
            root,
            vModel,
            messageFromChildren
        }
    }
}   
</script>

<style>

</style>