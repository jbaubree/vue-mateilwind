<script setup lang="ts">
import type { Variant } from '@/types/common'
import type { SelectItem } from '@/types/form'
import { useForm } from '@/utils/form.utils'

const props = withDefaults(defineProps<{
  modelValue: SelectItem[] | SelectItem | {}
  items?: SelectItem[]
  variant?: Variant
  label?: string
  errorMessage?: string
  isClearable?: boolean
  isLoading?: boolean
  hasAsyncData?: boolean
  hasMultipleValues?: boolean
}>(), {
  variant: 'primary',
})

const search = ref<string>('')
const rInput = ref<HTMLDivElement>()
const rListItems = ref<HTMLDivElement>()
const showItems = ref<boolean>(false)
const isValidating = ref<boolean>(false)

const { inputWrapperClasses } = useForm(props, isValidating)

const emit = defineEmits<{
  (eventName: 'update:modelValue', value: SelectItem[] | SelectItem | {}): void
  (eventName: 'input', value: string): void
}>()
function updateValue(item: SelectItem[] | SelectItem | {}): void {
  emit('update:modelValue', item)
}

onClickOutside(rListItems, resetSearch)

const isModelArray = computed((): boolean => props.modelValue.constructor.toString().includes('Array'))

function resetSearch(): void {
  if (!props.hasMultipleValues) {
    if (search.value !== (props.modelValue as SelectItem).title) {
      search.value = ''
      emit('update:modelValue', {})
    }
  }
  else {
    search.value = ''
  }
  showItems.value = false
}

function onListItemClick(item: SelectItem): void {
  isValidating.value = true
  if (!props.hasMultipleValues) {
    updateValue(item)
    search.value = item.title
    showItems.value = false
    return
  }
  if (isModelArray.value) {
    const items = props.modelValue as Array<SelectItem>
    if (isItemSelected(item))
      items.splice(items.indexOf(item), 1)

    else
      items.push(item)

    updateValue(items)
    search.value = ''
    rInput.value?.focus()
  }
}

function resetInput(): void {
  search.value = ''
  updateValue(isModelArray.value ? [] : {})
}

function isItemSelected(item: SelectItem): boolean {
  if (isModelArray.value)
    return (props.modelValue as Array<SelectItem>).some((selectedItem: SelectItem) => selectedItem.title === item.title)

  if (!Object.entries(props.modelValue).length)
    return false

  return item.title === (props.modelValue as SelectItem).title
}

function onInputTyping($event: Event): void {
  showItems.value = true
  search.value = ($event.target as HTMLInputElement).value
  emit('input', ($event.target as HTMLInputElement).value)
  isValidating.value = true
}

const hasSelectedItems = computed((): boolean => {
  return isModelArray.value ? !!(props.modelValue as Array<SelectItem>).length : !!Object.entries(props.modelValue).length
})

const filteredItems = computed((): SelectItem[] | undefined => {
  if (!props.hasAsyncData)
    return props.items?.filter(item => item.title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))

  return props.items
})
</script>

<template>
  <div class="relative">
    <div
      class="relative flex items-center max-w-full w-full min-w-0 border-b form-input-wrapper mb-3"
      :class="inputWrapperClasses"
    >
      <label
        class="text-gray-400 absolute h-5 top-4 transition-all duration-300 transform"
        :class="{
          'text-xs': showItems || hasSelectedItems,
          '-translate-y-9': (showItems || hasSelectedItems) && hasMultipleValues,
          '-translate-y-6': (showItems || hasSelectedItems) && !hasMultipleValues,
        }"
      >{{ label }}</label>
      <div
        class="flex items-center flex-1 gap-1 flex-wrap max-w-full min-w-0 min-h-12 cursor-text"
        @click="() => rInput?.focus()"
      >
        <template v-if="isModelArray">
          <MwBadge
            v-for="item, index in (modelValue as SelectItem[])"
            :key="index"
            variant="primary"
            v-bind="{ isClearable }"
            @clear="onListItemClick(item)"
          >
            {{ item.title }}
          </MwBadge>
        </template>
        <input
          ref="rInput"
          :value="search"
          class="relative min-w-0 min-h-8 flex-1 bg-transparent"
          @focus="showItems = true, ($event.target as HTMLInputElement).select()"
          @input="onInputTyping($event)"
        />
      </div>
      <div
        v-if="isClearable && hasSelectedItems"
        class="w-3 h-3 ml-1 flex items-center content-center cursor-pointer"
        @click="resetInput"
      >
        <div class="h-px w-3 absolute rounded bg-black transform rotate-45"></div>
        <div class="h-px w-3 absolute rounded bg-black transform -rotate-45"></div>
      </div>
      <div
        class="h-5 w-5 transition-transform duration-300"
        :class="{ 'transform rotate-180': showItems }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M7,10L12,15L17,10H7Z" />
        </svg>
      </div>
    </div>
    <transition name="slide-in-up">
      <div
        v-if="showItems"
        ref="rListItems"
        class="absolute w-full z-10 py-2 bg-gray-50 rounded-md shadow-md dropdown-menu top-full mt-2 left-0"
      >
        <MwList class="px-0 py-2">
          <div v-if="isLoading" class="absolute transform -translate-x-1/2 left-50 py-5">
            <MwButtonLoader color="gray" />
          </div>
          <template v-if="filteredItems?.length">
            <MwListItem
              v-for="item, index in filteredItems"
              :key="index"
              v-bind="{ item }"
              is-clickable
              :is-disabled="isLoading"
              :is-selected="isItemSelected(item)"
              @click.prevent.stop="onListItemClick(item)"
            />
          </template>
          <template v-else>
            <MwListItem :item="{ title: $t('select.no_result') }" :is-disabled="isLoading" />
          </template>
        </MwList>
      </div>
    </transition>
    <span
      v-if="errorMessage && isValidating"
      class="block text-xs text-danger-500 mt-1"
    >{{ errorMessage }}</span>
  </div>
</template>
