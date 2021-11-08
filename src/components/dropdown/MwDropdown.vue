<script setup lang="ts">

withDefaults(defineProps<{
  position?: 'left' | 'right'
  dropup?: boolean
  closeOnItemClick?: boolean
}>(), {
  position: 'left',
})

const slots = useSlots()
const showDropdown = ref(false)
const rDropdown = ref<HTMLDivElement>()

onClickOutside(rDropdown, () => showDropdown.value = false)
</script>

<template>
  <div class="relative inline-block">
    <div @click="showDropdown = !showDropdown">
      <slot name="toggler" />
    </div>
    <transition name="slide-in-up">
      <div
        v-if="showDropdown"
        ref="rDropdown"
        class="absolute z-10 py-2 bg-gray-50 rounded-md shadow-md dropdown-menu"
        :style="dropup ? 'bottom: 100%' : ''"
        :class="[
          dropup ? 'mb-2' : 'mt-2',
          {
            'left-0': position === 'left',
            'right-0': position === 'right',
          }
        ]"
      >
        <div v-if="slots.title" class="px-4 pt-2">
          <slot name="title" />
        </div>
        <MwList class="!p-0" @click="closeOnItemClick ? showDropdown = false : ''">
          <slot name="items" />
        </MwList>
      </div>
    </transition>
  </div>
</template>
