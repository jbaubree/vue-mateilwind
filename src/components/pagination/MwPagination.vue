<script setup lang="ts">
import type { PaginationChangeEventContext } from '@/types/pagination'

const props = withDefaults(defineProps<{
  nbItems: number
  itemsPerPage?: number
}>(), {
  itemsPerPage: 10,
})

const emit = defineEmits<{
  (eventName: 'page-changed', context: PaginationChangeEventContext): void
}>()

const currentPage = ref<number>(1)
const itemsPerPage = ref<number>(props.itemsPerPage)

function onNextPageButtonClick(): void {
  if ((currentPage.value * itemsPerPage.value) < props.nbItems) currentPage.value++
  emitChange()
}
function onPreviousPageButtonClick(): void {
  if (currentPage.value > 1) currentPage.value--
  emitChange()
}

function emitChange(): void {
  emit('page-changed', {
    currentPage: currentPage.value,
  })
}

const canGoNext = computed((): boolean => (currentPage.value * itemsPerPage.value) < props.nbItems)
const canGoBack = computed((): boolean => (currentPage.value > 1))
</script>

<template>
  <MwButtonGroup v-if="canGoBack || canGoNext">
    <MwButton
      v-if="canGoBack"
      is-outlined
      variant="primary"
      @click="onPreviousPageButtonClick()"
    >
      {{ $t('pagination.previous') }}
    </MwButton>
    <MwButton
      v-if="canGoNext"
      is-outlined
      variant="primary"
      @click="onNextPageButtonClick()"
    >
      {{ $t('pagination.next') }}
    </MwButton>
  </MwButtonGroup>
</template>
