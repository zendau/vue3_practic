export default {
    mounted(el, binding) {
        console.log(binding)
        if (!["top", "left", "bottom", "right"].includes(binding.arg)) {
            new Error("undefaund v-pin arg "+binding.arg)
        }
        el.style.position = 'fixed'
        el.style[binding.arg] = binding.value + 'px'

        if(binding.modifiers.color) {
            el.style.color = "red"
        }
        if(binding.modifiers.size) {
            el.style.fontSize = 30+"px"
        }

    }
}