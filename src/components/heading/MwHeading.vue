<script setup lang="ts">
import type { Heading, Variant } from '@/types'

const props = defineProps<{
  type: Heading
  variant?: Variant
}>()

const componentType = computed((): string => {
  if (props.type.match(/h[1-6]/g))
    return props.type

  if (props.type === 'LeadText')
    return 'p'

  return 'span'
})

const defaultClasses = computed((): string => {
  if (props.type.match(/h[1-6]/g))
    return 'mt-0 mb-2 font-bold leading-normal'

  if (props.type === 'LeadText')
    return 'mt-6 mb-4 font-light leading-relaxed'

  return ''
})

const colorClass = computed((): string => {
  if (props.variant)
    return `text-${props.variant}-500`

  if (props.type === 'LeadText')
    return 'text-gray-500'

  return 'text-black'
})

const fontSizeClass = computed((): string => {
  switch (props.type) {
    case 'h1':
      return 'text-6xl'
    case 'h2':
      return 'text-5xl'
    case 'h3':
      return 'text-4xl'
    case 'h4':
      return 'text-3xl'
    case 'h5':
      return 'text-2xl'
    case 'h6':
      return 'text-xl'
    case 'LeadText':
      return 'text-lg'
    default:
      return 'text-base'
  }
})
</script>

<template>
  <component
    :is="componentType"
    :class="[defaultClasses, colorClass, fontSizeClass]"
  >
    <slot />
  </component>
</template>
