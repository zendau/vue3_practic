export default {
    data() {
        return {
            mixinValue: "hello"
        }
    },
    methods: {
      change() {
        this.mixinValue = "Message from mixin"
    }
    }
}