<script setup lang="ts">

const slots = useSlots()

</script>
<template>
  <div class="rounded bg-white shadow-lg">
    <div class="px-6 py-4">
      <div v-if="slots.title" class="font-bold text-xl mb-5 text-center">
        <slot name="title" />
      </div>
      <p v-if="slots.text" class="text-gray-700">
        <slot name="text" />
      </p>
      <slot />
    </div>
  </div>
</template>
