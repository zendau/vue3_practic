<template>

<div class="container">
  <h1>{{$translate("app.header")}}</h1>
  <h1>{{mixinValue}}</h1>
  <input v-focus type="text">
  <button v-pin:top.color.size="200" @click="change">Change</button>
  <button @click="changeI18n">{{$translate("app.btn")}}</button>
  <app-alert :key="render"></app-alert>
</div>

</template>

<script>

import myMixin from "./mixins/customMixin"
import AppAlert from "./components/AppAlert"

export default {
  name: 'App',
  mixins: [myMixin],
  components: {
    "app-alert":AppAlert
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  inject: ["changeLang"],
  data () {
    return {
      render: false
    }
  },
  methods: {
    changeI18n() {
      this.changeLang()
      this.render = !this.render
    }
  }

}
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  text-align: center;
  grid-template-columns: 300px;
  row-gap: 20px;
}
h1 {
  margin: 0;
}
</style>
