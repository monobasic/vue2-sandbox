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
      <p>Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from '@vue/composition-api'
import eventApi from '@/api/events'

export default {
  setup() {
    const searchInput = ref('')
    const results = ref(null)
    const loading = ref(false)
    const error = ref(null)

    async function loadData(search) {
      loading.value = true
      error.value = null
      results.value = null
      try {
        results.value = await eventApi.getEventCount(search.value)
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    }

    watch(searchInput, () => {
      if (searchInput.value !== '') {
        loadData(searchInput)
      } else {
        results.value = null
      }
    })

    return {
      searchInput,
      results,
      loading,
      error
    }
  }
}
</script>
