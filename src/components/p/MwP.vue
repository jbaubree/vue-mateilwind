<script setup lang="ts">
import type { Variant } from '@/types/common'

withDefaults(defineProps<{
  variant?: Variant
}>(), {
})
</script>

<template>
  <p
    :class="variant ? `text-${variant}-500` : 'text-black'"
    class="text-base font-light leading-relaxed mt-0 mb-4"
  >
    <slot />
  </p>
</template>
