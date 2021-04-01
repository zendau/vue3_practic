const App = {
    data() {
        return {
            inputVal: "",
            placeholder: "print your task",
            tasks: [],
            showError: false,
            messageError: "",
        }
    },
    methods: {
        add() {
            if (this.inputVal !== "") {
                this.tasks.push(this.inputVal)
                this.inputVal = ""
            }
        },
        remove(index) {
            this.tasks.splice(index, 1)
        }
    },
    watch: {
        inputVal(value) {
            if (value.length > 15) {
                this.inputVal = ""
                this.showError = true,
                this.messageError = "Length must be smaller than 15"
                setTimeout(() => {
                    this.showError = false
                }, 5000)
            }
        }
    }
}

Vue.createApp(App).mount("#app")