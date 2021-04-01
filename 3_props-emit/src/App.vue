<template>
  <div id="app">
    <h1 class="alert alert-success">Current time {{time}}</h1>
    <h4 class="alert alert-primary">Total opens: {{openCount}}</h4>
    <h4 class="alert alert-secondary">Total reads: {{readCount}}</h4>
    <div class="container card" v-for="post in posts" :key="post.id">
       <post
        :title="post.title"
        :body="post.body"
        @openEvent="openCount++"
        @read="readCount++"
       ></post>
    </div>
  </div>
</template>

<script>

import post  from "./components/post";

export default {
  
  setup() {
    
  },
  components: {
    "post": post,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "first post",
          body: "body of first post"
        },
        {
          id: 2,
          title: "second post",
          body: "body of second post"
        },
        {
          id: 3,
          title: "third post",
          body: "body of third post"
        }
      ],
      readCount: 0,
      openCount: 0,
      time: ""
    }
  },
  mounted() {
    setInterval(()=>{
      const time = new Date()
      this.time = time.getHours() + ":" +  time.getMinutes() + ":" + time.getSeconds()
    }, 1000)
  },
  methods: {
    
  }
 
}
</script>

<style scoped>
  .card {
    margin-bottom: 30px;
  }
</style>