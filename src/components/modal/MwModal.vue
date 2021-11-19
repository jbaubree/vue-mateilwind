<script setup lang="ts">
import type { ButtonSize } from '@/types'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  hasCloseButton?: boolean
  closeOnClickOutside?: boolean
  size?: ButtonSize
}>(), {
  size: 'md',
})

const emit = defineEmits<{
  (eventName: 'cancel'): void
}>()

const rModal = ref<HTMLDivElement>()

if (props.closeOnClickOutside)
  onClickOutside(rModal, () => emit('cancel'))

</script>

<template>
  <teleport to="body">
    <transition name="slide-in-up">
      <div
        v-if="modelValue"
        class="flex overflow-x-hidden overflow-y-auto fixed inset-0 justify-center items-center"
      >
        <div
          ref="rModal"
          class="relative w-auto mx-auto px-5"
          :class="{
            'max-w-sm': size === 'sm',
            'max-w-2xl': size === 'md',
            'max-w-5xl': size === 'lg',
            'max-w-6xl': size === 'xl',
          }"
        >
          <div class="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white">
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t"
            >
              <h3 class="text-3xl font-semibold">
                <slot name="title" />
              </h3>
              <div
                v-if="hasCloseButton"
                class="ml-auto w-8 h-8 flex items-center content-center cursor-pointer"
                @click="emit('cancel')"
              >
                <div class="h-1 w-8 absolute rounded bg-gray-200 transform rotate-45"></div>
                <div class="h-1 w-8 absolute rounded bg-gray-200 transform -rotate-45"></div>
              </div>
            </div>
            <div class="relative p-6 flex-auto">
              <p class="my-4 text-gray-500 leading-relaxed">
                <slot name="body" />
              </p>
            </div>
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b gap-2"
            >
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
