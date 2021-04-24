<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
        </li>
      <li>
        <router-link active-class="test-link" to="mail">Почта</router-link>
      </li>
      <li>
        <a @click.prevent="logout">Выход</a></li>
    </ul>
  </header>
  {{visible}}
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  inject: ["logout"]
}
</script>
