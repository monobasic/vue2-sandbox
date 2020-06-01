<template>
  <div class="max-w-sm mx-auto">
    Search for

    <div class="relative mr-6 my-2">
      <input
        v-model="searchInput"
        type="search"
        class="shadow rounded border-0 p-3"
        placeholder="Search..."
      />
    </div>

    <div>
      <p>Loading: {{ getEvents.loading.value }}</p>
      <p>Error: {{ getEvents.error.value }}</p>
      <p>Number of events: {{ getEvents.results.value }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from '@vue/composition-api'
import eventApi from '@/api/events'
import usePromise from '@/composables/use-promise'

export default {
  setup() {
    const searchInput = ref('')
    const getEvents = usePromise(search => eventApi.getEventCount(search.value))

    watch(searchInput, () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.results.value = null
      }
    })

    return {
      searchInput,
      getEvents
    }
  }
}
</script>
