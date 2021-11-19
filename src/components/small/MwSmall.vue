<script setup lang="ts">
import type { Variant } from '@/types'
import { useStyle } from '@/utils/style.windi'

const props = withDefaults(defineProps<{
  variant?: Variant
}>(), {
})

const { text500 } = useStyle(props.variant ?? 'primary')
</script>

<template>
  <small
    :class="variant ? `${text500}` : 'text-black'"
    class="font-normal leading-normal mt-0 mb-4"
  >
    <slot />
  </small>
</template>
