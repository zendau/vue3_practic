<template>
  <the-navbar :visible="auth"></the-navbar>
  {{auth}}
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  components: {TheNavbar},
  data() {
    return {
      auth: false,
    }
  },
  mounted() {
    if (!this.auth) {
      this.$router.push("/login")
    }
  },
  methods: {
    login(email, pass) {
      console.log(email, pass)
      this.auth = true

      if (this.$route.query.page) {
         this.$router.push(this.$route.query.page)
      } else {
         this.$router.push("/")
      }

    },
    logout() {
      this.auth = false
      this.$router.push({
        path: "/login",
        query: {
          page: this.$route.path
        }
      })
    }
  },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 0, theme: 'Купил себе PlayStation 5'},
        {id: 1, theme: 'Выучил Vue Router'},
        {id: 2, theme: 'Хочу изучить весь Vue'},
        {id: 3, theme: 'А следующий блок про Vuex!'},
        {id: 4, theme: 'А что там на счет Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>
</style>
