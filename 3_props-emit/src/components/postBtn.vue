<template>
    <button 
    v-if="!wasRead"
    @click="onClick"
    :class="'btn btn-'+color"
    ><slot/>
    </button>
</template>

<script>
export default {
    data() {
        return {
            wasRead: false,
            isOpen: false,
        }
    },
    methods: {
        onClick() {
            if (this.typeBtn === "read") {
                this.wasRead = !this.wasRead
                this.$emit('readEventBtn', this.wasRead)
            } else if (this.typeBtn === "open") {
                this.isOpen = !this.isOpen
                this.$emit("openEventBtn", this.isOpen)
            }
        },
    },
    props: {
        color: {
            validator(value) {
                return ['primary', "success", "danger"].indexOf(value) !== -1
            },
            type: String,
            required: true
        },
        typeBtn: {
            type: String,
            required: true,
            validator(value) {
                return ["read", "open"].indexOf(value) !== -1
            }
        }
    },
    emit: ["openEventBtn", "readEventBtn"]
}
</script>

<style>

</style>