<template>
  <div v-if="$route.params.id">
    <h2>{{emails[id].theme}}</h2>
    <p>{{emails[id].theme+" body"}}</p>
    <button class="btn" @click.prevent="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    Выберите новость
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  inject: ["emails"]
}
</script>

<style scoped>

</style>