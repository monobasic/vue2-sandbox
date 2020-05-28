<template>
  <div class="p-6">
    <h1>I am the Home component.</h1>
    <Notification/>
  </div>
</template>
<script>
import Notification from './Notification.vue'
export default {
  components: {
    Notification
  }
}
</script>