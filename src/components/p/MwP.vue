<script setup lang="ts">
import type { Variant } from '@/types'
import { useStyle } from '@/utils/style.windi'

const props = defineProps<{
  variant?: Variant
}>()

const { text500 } = useStyle(props.variant ?? 'primary')

</script>

<template>
  <p
    :class="variant ? `${text500}` : 'text-black'"
    class="text-base font-light leading-relaxed mt-0 mb-4"
  >
    <slot />
  </p>
</template>
