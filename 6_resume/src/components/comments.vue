<template>
   <div class="container">
    <p>
      <button  @click="getComments" class="btn primary">Загрузить комментарии</button>
    </p>
    <div v-if="response" class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="item in comments" :key="item.id">
          <div>
            <p><strong>{{item.email}}</strong></p>
            <small>{{item.body}}</small>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="showLoader" class="loader"></div>
  </div>
</template>

<script>

import axios from "axios"

export default {
    data() {
        return {
            comments: [],
            showLoader: false
        }
    },
    methods: {
        getComments() {
            this.showLoader = true
			axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
			.then((response) => {
				this.comments = response.data
                this.showLoader = false
			})
			.catch((error) => {
				console.log(error)
			})
			
		}
    },
    computed: {
        response() {
            return this.comments.length > 0 ? true : false
        }
    }
}
</script>

<style>

</style>