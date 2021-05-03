<template>
  <span :class="['badge', color]">{{text}}</span>
</template>

<script>
import { computed } from 'vue'
export default {
  props: ["type"],
  setup(props) {
    
    const color = computed(()=> {
      if (props.type == "active") {
        return "primary"
      } else if (props.type == "done") {
        return "primary"
      } else if (props.type == "cancelled") {
        return "danger"
      } else if (props.type == "pending") {
        return "warning"
      } else {
        return ""
      }
    })
    const text = computed(()=> {
      if (props.type == "active") {
        return "Активен"
      } else if (props.type == "done") {
        return "Завершен"
      } else if (props.type == "cancelled") {
        return "Отменен"
      } else if (props.type == "pending") {
        return "Выполняется"
      } else {
        return ""
      }
    })


    return {
      text,
      color
    }
    

  },
}
</script>