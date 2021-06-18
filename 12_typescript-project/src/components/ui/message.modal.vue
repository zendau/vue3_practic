<template>
  <div class="modal" :class=typeClass>
    {{title}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
      title: {
        required: true,
        type: String
      },
      typeClass: {
        required: true,
        type: String,
        validator: function(value : string) {
          return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
      }
    },
    setup() {
        return {
            
        }
    },
})
</script>

<style>
  .modal {
    display: block;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    position: fixed;
    right: 10px;
    top: 10px;
  }

  .success {
    color: green;
  }
  .warning {
    color: orange;
  } 
  .danger {
    color: red;
  }
</style>