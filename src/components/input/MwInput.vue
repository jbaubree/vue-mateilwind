<script setup lang="ts">
import type { Variant } from '@/types/common'
import type { InputType } from '@/types/form'
import { useForm } from '@/utils/form.utils'

const props = withDefaults(defineProps<{
  modelValue: string
  variant?: Variant
  type?: InputType
  label?: string
  size?: 'sm' | 'md' | 'lg'
  errorMessage?: string
  hasValidation?: boolean
}>(), {
  variant: 'primary',
  type: 'text',
  size: 'md',
})

const isValidating = ref<boolean>(false)
const rInput = ref<HTMLDivElement>()
const isInputFocus = ref<boolean>(false)

onClickOutside(rInput, () => isInputFocus.value = false)

const { inputWrapperClasses } = useForm(props, isValidating)
const slots = useSlots()

const emit = defineEmits<{
  (eventName: 'update:modelValue', value: string): void
}>()

function updateValue(e: Event): void {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    class="relative"
    :class="[
      errorMessage ? 'mb-5' : 'mb-3',
    ]"
  >
    <div
      class="flex items-center max-w-full w-full min-w-0 border-b form-input-wrapper relative"
      :class="[
        inputWrapperClasses,
        {
          'h-9': size === 'sm',
          'h-11': size === 'md',
          'h-13': size === 'lg'
        }
      ]"
    >
      <label
        class="text-gray-400 absolute h-5 top-4 transition-all duration-300 transform"
        :class="{
          'text-xs -translate-y-6': isInputFocus || modelValue?.length,
        }"
      >{{ label }}</label>
      <input
        ref="rInput"
        :value="modelValue"
        :type="type"
        placeholder=" "
        class="relative min-w-0 min-h-8 flex-1 bg-transparent px-0"
        :class="{ 'text-sm': size === 'sm' }"
        @focus="isInputFocus = true"
        @input="updateValue($event), isValidating = true"
      />
      <div v-if="slots.icon" class>
        <slot name="icon" />
      </div>
    </div>
    <span
      v-if="errorMessage && isValidating"
      class="block text-xs text-danger-500 mt-1"
    >{{ errorMessage }}</span>
  </div>
</template>
