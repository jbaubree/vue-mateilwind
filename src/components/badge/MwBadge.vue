<script setup lang="ts">
import type { Variant } from '@/types'
import { useStyle } from '@/utils/style.windi'

const props = withDefaults(defineProps<{
  variant?: Variant
  isClearable?: boolean
}>(), {
  variant: 'primary',
})

const { bg500 } = useStyle(props.variant)

const emit = defineEmits<{
  (eventName: 'clear'): void
}>()
</script>

<template>
  <div
    class="inline-flex items-center gap-1 text-white rounded-full px-2 py-1 overflow-hidden"
    :class="`${bg500}`"
  >
    <span class="whitespace-nowrap overflow-hidden overflow-ellipsis leading-5">
      <slot />
    </span>
    <div
      v-if="isClearable"
      class="relative min-w-2 min-h-2 flex items-center content-center cursor-pointer"
      @click.stop="emit('clear')"
    >
      <div class="h-px w-2 absolute rounded bg-white transform rotate-45"></div>
      <div class="h-px w-2 absolute rounded bg-white transform -rotate-45"></div>
    </div>
  </div>
</template>
