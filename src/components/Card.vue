<template>
  <div>
    <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
      <img
        class="w-full"
        src="@/assets/sunset.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">Count: {{ count }}</p>
      </div>
      <div class="px-6 py-4">
        <button
          @click="increaseCount()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increase count +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    // Reactive reference example
    const title = ref('Composed, reactive Title, yay!')
    setTimeout(() => {
      title.value = 'Updated, composed, reactive Title, yay!'
    }, 5000)

    const count = ref(0)

    // Method example
    function increaseCount() {
      count.value++
    }

    return { title, count, increaseCount }
  }
}
</script>
