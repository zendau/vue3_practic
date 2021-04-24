<template>
  <div class="card no-padding">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in emails" :key="email.id">
          <a href="#" @click.prevent="$router.push('/mail/'+email.id)">
            {{email.theme}}
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <app-email-body :id="$route.params.id"></app-email-body>
    </div>
  </div>
</template>

<script>
import AppEmailBody from '../components/AppEmailBody'

export default {
  // components: {AppEmailBody},
  inject: ['emails'],
  components: {
    AppEmailBody
  },
  data() {
    return {
      currentId: 0,
    }
  },
  computed: {
    selectedTheme() {
      return this.emails[this.currentId].theme
    },
    selectedBody() {
      return this.emails[this.currentId].theme + " some diff body"
    }
  }
}
</script>

<style scoped>
  .card {
    display: flex;
  }

  .card.no-padding {
    padding: 0;
  }

  .card-nav {
    max-width: 300px;
    border-right: 1px solid #999999;
  }

  .card-body {
    padding: 0 1rem;
  }

  .list-item {
    padding: .5rem;
    cursor: pointer;
  }

  .list-item a {
    color: #2c3e50;
  }

  .list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
  }
</style>