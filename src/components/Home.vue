<template>
  <div class="p-6">

    <h1>I am the Home component.</h1>

    <Notification>
      <template v-slot:title="{mySlotProp}">
        Here might be a page title. Here we have mySlotProp: {{ mySlotProp }}
      </template>
      Hello I am the Notification Text passed in by slot
    </Notification>

    <List :items="items">
      <template v-slot:default="{item}">
        <div class="p3">icon {{ item.title }}</div>
      </template>
    </List>

    <List :items="items" v-slot:default="{item}">
        <div class="p3">icon {{ item.title }}</div>
    </List>

    <List :items="items">
      <template #default="{item}">
        <div class="p3">icon {{ item.title }}</div>
      </template>
    </List>

  </div>
</template>
<script>
import Notification from './Notification.vue'
import List from './List.vue'

export default {
  components: {
    Notification,
    List
  },
  data: () => {
    return {
      items: [
        {
          title: 'foo'
        },
        {
          title: 'bar'
        },
        {
          title: 'baz'
        },
      ]
    }
  }
}
</script>