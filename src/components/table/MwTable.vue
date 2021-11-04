<script setup lang="ts">
import type { TableField, SortDirection, TableSortChangeEventContext } from '@/types/table'

const props = withDefaults(defineProps<{
  fields: TableField[]
  items: Array<keyof TableField>
  itemsPerPage?: number
  currentPage?: number
  isStriped?: boolean
  isHoverable?: boolean
  isSmall?: boolean
  isBordered?: boolean
  isLoading?: boolean
  hasNoLocalSorting?: boolean
  hasStickyHeader?: boolean
}>(), {
  itemsPerPage: 10,
  currentPage: 1,
})

const emit = defineEmits<{
  (eventName: 'sort-changed', context: TableSortChangeEventContext): void
  (eventName: 'row-clicked', item: unknown): void
}>()

const currentSortDir = ref<SortDirection>('')
const currentSortField = ref<string>('')

function sortItems(field: string): void {
  if (field === currentSortField.value)
    currentSortDir.value = currentSortDir.value === 'asc' ? 'desc' : 'asc'

  else currentSortDir.value = 'asc'
  currentSortField.value = field
  if (props.hasNoLocalSorting) {
    emit('sort-changed', {
      currentSortDir: currentSortDir.value,
      currentSortField: currentSortField.value,
    })
  }
}

const sortedItems = computed(() => {
  if (props.hasNoLocalSorting)
    return props.items

  const items = props.items
  return items.sort((a: any, b: any) => {
    let modifier = 1
    if (currentSortDir.value === 'desc') modifier = -1
    if (a[currentSortField.value] < b[currentSortField.value]) return -1 * modifier
    if (a[currentSortField.value] > b[currentSortField.value]) return 1 * modifier
    return 0
  }).filter((_, index) => {
    const start = (props.currentPage - 1) * props.itemsPerPage
    const end = props.currentPage * props.itemsPerPage
    if (index >= start && index < end) return true
    return false
  })
})
</script>

<template>
  <div class="overflow-x-auto" :class="{ 'overflow-y-auto': hasStickyHeader }">
    <table class="table w-full bg-white mb-4" :class="{ 'opacity-50': isLoading }">
      <thead>
        <tr :class="{ 'z-10 sticky top-0': hasStickyHeader }">
          <th
            v-for="field, index in fields"
            :key="index"
            scope="col"
            :style="field.minWidth ? `min-width: ${field.minWidth}px` : ''"
            class="border-b border-gray-300 text-gray-800 bg-white text-left text-sm uppercase"
            :class="[
              isSmall ? 'pl-3 pr-5 py-2' : 'pl-5 pr-7 py-3',
              {
                'cursor-pointer': field.isSortable && !isLoading,
                'bg-none bg-no-repeat sortable': field.isSortable,
                [currentSortDir]: field.value === currentSortField,
                [`${field.thClass}`]: field.thClass,
              },
            ]"
            @click="field.isSortable && !isLoading ? sortItems(field.value) : ''"
          >
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item, index in sortedItems"
          :key="index"
          :class="{
            'odd:bg-primary-50': isStriped,
            '!hover:bg-primary-100': isHoverable,
            'border-b border-gray-200 last:border-0': isBordered,
          }"
          @click="emit('row-clicked', item)"
        >
          <td
            v-for="field, i in fields"
            :key="i"
            :class="isSmall ? 'px-3 py-2' : 'px-5 py-5 text-sm'"
          >
            <div class="flex items-center" :class="[field.tdClass ? field.tdClass : '']">
              <p class="text-gray-900 whitespace-no-wrap">
                <slot
                  :name="field.value"
                  v-bind="{ index, item, field, value: item[field.value] }"
                >
                  {{ item[field.value] }}
                </slot>
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
