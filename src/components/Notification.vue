<template>
  <div>
    <div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo">
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">
          <slot name="title" v-bind:mySlotProp="`foo`">
            Default Title
          </slot>
        </h4>
        <p class="text-base text-gray-600 leading-normal">
          <slot>
            Default Text
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>