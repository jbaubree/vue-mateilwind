<script setup lang="ts">
import type { Variant } from '@/types'
import { useStyle } from '@/utils/style.windi'

const props = withDefaults(defineProps<{
  variant?: Variant
  isClearable?: boolean
}>(), {
  variant: 'primary',
})

const { bg200, bg500, border500, text500 } = useStyle(props.variant)

const showAlert = ref(true)
</script>

<template>
  <div
    v-if="showAlert"
    class="flex items-center gap-3 p-4 border rounded-lg relative mb-4 transition-all duration-300"
    :class="`${border500} ${bg200} ${text500}`"
  >
    <slot />
    <div
      v-if="isClearable"
      class="relative min-w-3 min-h-3 flex items-center content-center cursor-pointer ml-auto"
      @click="showAlert = false"
    >
      <div class="h-px w-3 absolute rounded transform rotate-45" :class="`${bg500}`"></div>
      <div class="h-px w-3 absolute rounded transform -rotate-45" :class="`${bg500}`"></div>
    </div>
  </div>
</template>
