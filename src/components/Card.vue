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
        <p class="text-gray-700 text-base">Spaces: {{ spaces }}</p>
        <p class="text-gray-700 text-base">spacesLeft: {{ spacesLeft }}</p>
      </div>
      <div class="px-6 py-4">
        <button
          @click="increaseSpaces()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increase spaces +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import useEventSpace from '@/use/event-space'
import { onMounted } from '@vue/composition-api'

export default {
  setup() {
    // beforeCreate() is called right before setup()

    const {
      title,
      spaces,
      attending,
      spacesLeft,
      increaseSpaces
    } = useEventSpace()

    onMounted(() => {
      console.log('mounted!!')
    })

    return {
      title,
      spaces,
      attending,
      spacesLeft,
      increaseSpaces
    }
    // created() will be called right after setup()
  }
}
</script>
