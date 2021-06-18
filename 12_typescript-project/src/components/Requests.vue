<template>
  <div>
      <add-req></add-req>
      <list-req></list-req>
  </div>
</template>

<script>

import addReq from "./Requests/addRequest.vue"
import listReq from "./Requests/listRequest.vue"

export default {
  components: {
    addReq,
    listReq
  }

}
</script>

<style>

</style>