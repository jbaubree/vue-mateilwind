<script setup lang="ts">
import type { Variant } from '@/types'

withDefaults(defineProps<{
  variant?: Variant
}>(), {
})
</script>

<template>
  <small
    :class="variant ? `text-${variant}-500` : 'text-black'"
    class="font-normal leading-normal mt-0 mb-4"
  >
    <slot />
  </small>
</template>
