<script setup lang="ts">
import type { Variant } from '@/types'

withDefaults(defineProps<{
  variant?: Variant
  isClearable?: boolean
}>(), {
  variant: 'primary',
})

const showAlert = ref(true)
</script>

<template>
  <div
    v-if="showAlert"
    class="flex items-center gap-3 p-4 border rounded-lg relative mb-4 transition-all duration-300"
    :class="`border-${variant}-500 bg-${variant}-200 text-${variant}-500`"
  >
    <slot />
    <div
      v-if="isClearable"
      class="relative min-w-3 min-h-3 flex items-center content-center cursor-pointer ml-auto"
      @click="showAlert = false"
    >
      <div class="h-px w-3 absolute rounded transform rotate-45" :class="`bg-${variant}-500`"></div>
      <div class="h-px w-3 absolute rounded transform -rotate-45" :class="`bg-${variant}-500`"></div>
    </div>
  </div>
</template>
