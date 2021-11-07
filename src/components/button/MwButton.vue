<script setup lang="ts">
import Ripple from 'material-ripple-effects'
import type { ButtonSize, ButtonVariant } from '@/types/button'

const props = withDefaults(defineProps<{
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  isBlock?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isElevated?: boolean
  isOutlined?: boolean
  hasIcon?: boolean
}>(), {
  variant: 'secondary',
  size: 'md',
})

const attrs = useAttrs()

const rippleEffect = new Ripple()

const type = computed((): string => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="type"
    :href="href"
    class="inline-block font-bold transition duration-300 relative"
    :class="[{
      // Modifiers
      'w-full': isBlock,
      'opacity-50': isDisabled || isLoading,
      'shadow-md': isElevated,
      'rounded-full flex items-center justify-center': hasIcon,
      'rounded': !hasIcon && (!attrs.class || !(attrs.class as string).includes('rounded-')),
      // Sizes
      'min-w-8 w-8 min-h-8 h-8': hasIcon && size === 'sm',
      'min-w-10 w-10 min-h-10 h-10': hasIcon && size !== 'sm',
      'py-2 px-4': !hasIcon && size === 'md',
      'py-1 px-2': !hasIcon && size === 'sm',
      'py-3 px-6': !hasIcon && size === 'lg',
      'py-4 px-8': !hasIcon && size === 'xl',
      // Cursor
      'cursor-pointer': !isDisabled && !isLoading,
      'cursor-default': isDisabled,
      'cursor-wait': isLoading,
      // Colors
      'text-gray-700': variant.includes('light'),
      'text-blue-500 bg-white hover:bg-white': variant === 'link',
      [`bg-${variant}-500 text-white`]: !isOutlined && variant !== 'link',
      [`bg-transparent text-${variant}-500 border border-${variant}-500`]: isOutlined,
      [`hover:bg-${variant}-500 hover:text-white hover:border-transparent`]: isOutlined && !isDisabled && variant !== 'link' && !variant.includes('light'),
      ['hover:bg-blue-500 hover:text-white hover:border-transparent']: isOutlined && !isDisabled  && variant === 'link',
      [`hover:bg-${variant}-700 hover:text-white hover:border-transparent`]: isOutlined && !isDisabled  && variant.includes('light'),
      [`hover:bg-${variant}-700`]: !isDisabled && !isLoading && !isOutlined && variant !== 'link',
    }]"
    @mouseup="(e: MouseEvent) => {
      if (!isLoading && !isDisabled) rippleEffect.create(e, variant === 'link' ? 'dark' : 'light')
    }"
  >
    <span :class="{ 'opacity-0': isLoading }">
      <slot />
    </span>
    <span
      v-if="isLoading"
      class="absolute flex items-center justify-center h-full w-full top-0 left-0"
    >
      <MwButtonLoader />
    </span>
  </component>
</template>
