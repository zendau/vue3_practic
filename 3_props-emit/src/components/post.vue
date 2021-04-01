<template>
    <div class="item">
        <h3 class="title">{{title}}</h3>

         <post-btn
                typeBtn="open"
                color="success"
                @openEventBtn="open"
                >
            Open
            </post-btn>
        <div class="container" v-if="isOpen">
            <p class="body">{{textBody}}</p>
            <post-btn
                v-if="!wasRead"
                typeBtn="read"
                color="primary"
                @readEventBtn="read"
                >
            Read
            </post-btn>
        </div>
    </div>
</template>


<script>

import postBtn from "./postBtn"

export default {
    props: {
        title: String,
        body: String
    },
    emit: ["read", "openEvent"],
    data() {
        return {
            textBody: "",
            isOpen: false,
            wasRead: false
        }
    },
    mounted() {
        this.textBody = this.body
    },
    methods: {
        read(wasRead) {
            this.wasRead = wasRead
            this.textBody = this.textBody.split("").reverse().join("")
            this.$emit("read")
        
        },
        open(isOpen) {
            this.isOpen = isOpen
            this.$emit("openEvent")
        }
    },
    components: {
        postBtn
    }
}
</script>