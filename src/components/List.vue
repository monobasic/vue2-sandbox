<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.title">
        <slot v-bind:item="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array
    }
  }
}
</script>