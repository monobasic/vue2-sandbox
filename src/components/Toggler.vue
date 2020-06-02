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
    const { state: lightbulbState, send: lightbulbSend } = useMachine(
      lightbulbMachine
    )

    console.log(
      'lightService.state.value.value before',
      lightbulbState.value.value
    )

    // The send(...) function is an action creator; it is a pure function that only returns an action object and does not imperatively send an event. Actions are not immediately triggered.
    lightbulbSend('TURN_ON')

    onMounted(() => {
      console.log(
        'lightService.state.value.value after',
        lightbulbState.value.value
      )
    })

    return {
      toggleState,
      toggleSend,
      lightbulbState,
      lightbulbSend
    }
  }
}
</script>

<style></style>
