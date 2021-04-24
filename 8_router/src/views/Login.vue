<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password">
    </div>

    <button class="btn primary" type="submit" @click.prevent="submit">Войти</button>
    <button class="btn warning" @click="$router.push('/forget')">Забыл пароль?</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid() {
      return this.email !== '' && this.password !== ''
    }
  },
  inject: ["login"],
  methods: {
    submit() {
      if (this.isValid) {
        this.login(this.email, this.password)
      }
    }
  }
}
</script>

<style scoped>

</style>