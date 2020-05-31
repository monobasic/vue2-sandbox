import { reactive, computed, toRefs } from '@vue/composition-api'

export default function() {
  const state = reactive({
    title: 'Composed, reactive Title, yay!',
    spaces: 0,
    attending: ['Tim', 'Bob', 'Joe']
  })

  state.spacesLeft = computed(() => state.spaces - state.attending.length)

  setTimeout(() => {
    state.title = 'Updated, composed, reactive Title, yay!'
  }, 5000)

  function increaseSpaces() {
    state.spaces++
  }

  return { ...toRefs(state), increaseSpaces }
}
