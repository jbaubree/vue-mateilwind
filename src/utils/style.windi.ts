import type { ComputedRef } from 'vue'
import { ButtonVariant, Variant } from '@/types'

export function useStyle(variant: Variant | ButtonVariant): {
  bg50: ComputedRef<string>
  bg200: ComputedRef<string>
  bg500: ComputedRef<string>
  text500: ComputedRef<string>
  border500: ComputedRef<string>
  hoverBg100: ComputedRef<string>
  hoverBg500: ComputedRef<string>
  hoverBg700: ComputedRef<string>
} {
  const bg50 = computed((): string => {
    if (variant === 'primary')
      return 'bg-primary-50'
    if (variant === 'secondary')
      return 'bg-secondary-50'
    if (variant === 'success')
      return 'bg-success-50'
    if (variant === 'warning')
      return 'bg-warning-50'
    if (variant === 'danger')
      return 'bg-danger-50'
    if (variant === 'link')
      return 'bg-link-50'
    if (variant === 'light')
      return 'bg-light-50'
    if (variant === 'light-primary')
      return 'bg-light-primary-50'
    return ''
  })
  const bg200 = computed((): string => {
    if (variant === 'primary')
      return 'bg-primary-200'
    if (variant === 'secondary')
      return 'bg-secondary-200'
    if (variant === 'success')
      return 'bg-success-200'
    if (variant === 'warning')
      return 'bg-warning-200'
    if (variant === 'danger')
      return 'bg-danger-200'
    if (variant === 'link')
      return 'bg-link-200'
    if (variant === 'light')
      return 'bg-light-200'
    if (variant === 'light-primary')
      return 'bg-light-primary-200'
    return ''
  })
  const bg500 = computed((): string => {
    if (variant === 'primary')
      return 'bg-primary-500'
    if (variant === 'secondary')
      return 'bg-secondary-500'
    if (variant === 'success')
      return 'bg-success-500'
    if (variant === 'warning')
      return 'bg-warning-500'
    if (variant === 'danger')
      return 'bg-danger-500'
    if (variant === 'link')
      return 'bg-link-500'
    if (variant === 'light')
      return 'bg-light-500'
    if (variant === 'light-primary')
      return 'bg-light-primary-500'
    return ''
  })
  const text500 = computed((): string => {
    if (variant === 'primary')
      return 'text-primary-500'
    if (variant === 'secondary')
      return 'text-secondary-500'
    if (variant === 'success')
      return 'text-success-500'
    if (variant === 'warning')
      return 'text-warning-500'
    if (variant === 'danger')
      return 'text-danger-500'
    if (variant === 'link')
      return 'text-link-500'
    if (variant === 'light')
      return 'text-light-500'
    if (variant === 'light-primary')
      return 'text-light-primary-500'
    return ''
  })
  const border500 = computed((): string => {
    if (variant === 'primary')
      return 'border-primary-500'
    if (variant === 'secondary')
      return 'border-secondary-500'
    if (variant === 'success')
      return 'border-success-500'
    if (variant === 'warning')
      return 'border-warning-500'
    if (variant === 'danger')
      return 'border-danger-500'
    if (variant === 'link')
      return 'border-link-500'
    if (variant === 'light')
      return 'border-light-500'
    if (variant === 'light-primary')
      return 'border-light-primary-500'
    return ''
  })

  const hoverBg100 = computed((): string => {
    if (variant === 'primary')
      return 'hover:bg-primary-100'
    if (variant === 'secondary')
      return 'hover:bg-secondary-100'
    if (variant === 'success')
      return 'hover:bg-success-100'
    if (variant === 'warning')
      return 'hover:bg-warning-100'
    if (variant === 'danger')
      return 'hover:bg-danger-100'
    if (variant === 'link')
      return 'hover:bg-link-100'
    if (variant === 'light')
      return 'hover:bg-light-100'
    if (variant === 'light-primary')
      return 'hover:bg-light-primary-100'
    return ''
  })
  const hoverBg500 = computed((): string => {
    if (variant === 'primary')
      return 'hover:bg-primary-500'
    if (variant === 'secondary')
      return 'hover:bg-secondary-500'
    if (variant === 'success')
      return 'hover:bg-success-500'
    if (variant === 'warning')
      return 'hover:bg-warning-500'
    if (variant === 'danger')
      return 'hover:bg-danger-500'
    if (variant === 'link')
      return 'hover:bg-link-500'
    if (variant === 'light')
      return 'hover:bg-light-500'
    if (variant === 'light-primary')
      return 'hover:bg-light-primary-500'
    return ''
  })
  const hoverBg700 = computed((): string => {
    if (variant === 'primary')
      return 'hover:bg-primary-700'
    if (variant === 'secondary')
      return 'hover:bg-secondary-700'
    if (variant === 'success')
      return 'hover:bg-success-700'
    if (variant === 'warning')
      return 'hover:bg-warning-700'
    if (variant === 'danger')
      return 'hover:bg-danger-700'
    if (variant === 'link')
      return 'hover:bg-link-700'
    if (variant === 'light')
      return 'hover:bg-light-700'
    if (variant === 'light-primary')
      return 'hover:bg-light-primary-700'
    return ''
  })

  return {
    bg50,
    bg200,
    bg500,
    text500,
    border500,
    hoverBg100,
    hoverBg500,
    hoverBg700,
  }
}
