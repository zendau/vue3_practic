<template>
  <h1>Test props</h1>
  <h2>title -> {{title}}</h2>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
    props: {
        title: String
    },
    emits: ["callToParent"],
    setup(props, ctx) {

        const injectValue = inject("valueFromProvide")

        onMounted(()=>{
            console.log(props.title)
            console.log(ctx)
            ctx.emit("callToParent", "param")
            console.log("injectValue", injectValue.value)
        }) 
            
        
    }
}
</script>

<style>

</style>