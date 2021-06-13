<template>
    <!-- Suspence используется для асинхронных операций  -->
    <!-- Отрисовка происходит после получения данных -->
    <!-- Первый параметр слота - компонент для отрисовки -->
    <!-- Второй лоадер -->
    <div v-if="error">{{error}}</div>
    <Suspense>
        <template #default>
            <theUsers />
        </template>
        <template template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>

import theUsers from "./theUsers.vue"

export default {
    components: {
        theUsers
    }
}
</script>

<style>

</style>