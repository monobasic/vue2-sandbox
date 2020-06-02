<template>
  <button
    @click="toggleSend('TOGGLE')"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{
      toggleState.value === 'inactive'
        ? 'Click to activate'
        : 'Active! Click to deactivate'
    }}
  </button>
</template>

<script>
import { useMachine } from '@xstate/vue'
import { Machine } from 'xstate'
import { onMounted } from '@vue/composition-api'

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})

const lightbulbMachine = Machine({
  id: 'lightbulb',
  initial: 'unlit',
  states: {
    unlit: {
      on: { TURN_ON: 'lit', BREAK: 'broken' }
    },
    lit: {
      on: { TURN_OFF: 'unlit', BREAK: 'broken' }
    },
    broken: {
      type: 'final'
    }
  }
})

export default {
  setup() {
    const { state: toggleState, send: toggleSend } = useMachine(toggleMachine)
    // const { state: lightbulbState, send: lightbulbSend } = useMachine(
    //   lightbulbMachine
    // )

    const lightService = useMachine(lightbulbMachine)

    console.log(
      'lightService.state.value.value before',
      lightService.state.value.value
    )
    lightService.send('TURN_ON')
    console.log(
      'lightService.state.value.value after',
      lightService.state.value.value
    )

    onMounted(() => {})

    return {
      toggleState,
      toggleSend
      // lightbulbState,
      // lightbulbSend
    }
  }
}
</script>

<style></style>
