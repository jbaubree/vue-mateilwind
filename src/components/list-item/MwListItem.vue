<script setup lang="ts">
import Ripple from 'material-ripple-effects'
import type { Variant } from '@/types/common'
import type { ListItem } from '@/types/list'

defineProps<{
  item: ListItem
  isClickable?: boolean
  isSelected?: boolean
  isDisabled?: boolean
  variant?: Variant
}>()

const slots = useSlots()

const rippleEffect = new Ripple()
</script>

<template>
  <div
    class="mb-1 transition duration-300 py-3 px-4 items-center"
    :class="[{
      'flex': slots.icon,
      'cursor-pointer': isClickable && !isDisabled,
      '!bg-gray-200': isSelected && !variant,
      'opacity-50': isDisabled,
      'hover:bg-gray-100 bg-gray-50': !variant && !isDisabled,
      [`hover:bg-${variant}-100 bg-${variant}-50`]: variant && !isDisabled,
      [`!bg-${variant}-200`]: isSelected && variant,
    }]"
    @mouseup="(e: MouseEvent) => {
      !isDisabled && isClickable && rippleEffect.create(e, 'dark')
    }"
  >
    <div v-if="slots.icon" class="flex items-center my-3 mr-5">
      <slot name="icon" />
    </div>
    <div class="flex flex-wrap flex-col flex-1">
      <div class="text-black text-lg break-all">
        {{ item.title }}
      </div>
      <div v-if="item.subtitle" class="text-gray-600 text-sm break-all">
        {{ item.subtitle }}
      </div>
    </div>
    <slot name="actions" />
  </div>
</template>
