<script setup lang="ts">
import { useField } from 'vee-validate'
import type { TableField, TableSortChangeEventContext } from '@/types/table'
import type { PaginationChangeEventContext } from '@/types/pagination'
import type { ListItem } from '@/types/list'
import type { SelectItem } from '@/types/form'
import countries from '@/utils/countries'

const datepickerModel = ref<string>('')
const selectModel = ref<SelectItem[]>([])
const isSelectLoading = ref<boolean>(false)
const isTableLoading = ref<boolean>(false)
const currentTablePage = ref<number>(1)

function validateField(value: Array<SelectItem>): string | boolean {
  if (!value.length)
    return 'This field is required'

  if (value.length < 2)
    return 'This field must contain at least 2 characters'

  return true
}

const { value, errorMessage } = useField<Array<SelectItem>>('field', validateField)

watchEffect(() => {
  value.value = selectModel.value
})

const selectFetchedItems = ref<SelectItem[]>(countries.filter((_, index) => index < 10))

function selectFetchItems(search: string | undefined): void {
  isSelectLoading.value = true
  setTimeout(() => {
    if (typeof search === 'string')
      selectFetchedItems.value = countries.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((_, index) => index < 10)

    else
      selectFetchedItems.value = []

    isSelectLoading.value = false
  }, 1000)
}

const dropdownItems: ListItem[] = [
  {
    title: 'Dropdown list 1',
  },
  {
    title: 'Dropdown list 2',
  },
  {
    title: 'Dropdown list 3',
  },
]

const listItems: ListItem[] = [
  {
    title: 'Brunch this weekend?',
    subtitle: 'Ali Connors — I will be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    title: 'Summer BBQ',
    subtitle: 'to Alex, Scott, Jennifer — Wish I could come, but I am out of town this weekend.',
  },
  {
    title: 'Oui oui',
    subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever been?',
  },
  {
    title: 'Birthday gift',
    subtitle: 'Trevor Hansen — Have any ideas about what we should get Heidi for her birthday?',
  },
]

const {
  isRevealed,
  reveal,
  confirm,
  cancel,
} = useConfirmDialog()

const modalBody = `I always felt like I could do anything. That’s the main
  thing people are controlled by! Thoughts- their perception
  of themselves! They're slowed down by their perception of
  themselves. If you're taught you can’t do anything, you
  won’t do anything. I was taught I could do everything.`

const tableFields: TableField[] = [
  {
    label: 'User',
    value: 'user',
    isSortable: true,
    minWidth: 120,
  },
  {
    label: 'Rôle',
    value: 'role',
  },
  {
    label: 'Created At',
    value: 'createdAt',
    isSortable: true,
    minWidth: 120,
  },
  {
    label: 'Status',
    value: 'isActive',
  },
  {
    label: '',
    value: 'actions',
    tdClass: 'justify-end',
  },
]

const tableItems: any[] = [
  {
    user: 'Jean Marc',
    age: 30,
    role: 'Admin',
    createdAt: '12/09/2020',
    isActive: true,
  },
  {
    user: 'Marcus Coco',
    age: 12,
    role: 'Designer',
    createdAt: '01/10/2012',
    isActive: false,
  },
  {
    user: 'Eric Marc',
    role: 'Developer',
    createdAt: '02/10/2018',
    isActive: true,
  },
  {
    user: 'Julien Huger',
    age: 53,
    role: 'User',
    createdAt: '23/09/2010',
    isActive: true,
  },
]

function onSortChange(_context: TableSortChangeEventContext): void {
  isTableLoading.value = true
  // Get sorted items
  setTimeout(() => {
    isTableLoading.value = false
  }, 1000)
}

function onPageChange(context: PaginationChangeEventContext): void {
  currentTablePage.value = context.currentPage
  isTableLoading.value = true
  // Get sorted items
  setTimeout(() => {
    isTableLoading.value = false
  }, 1000)
}
</script>
<template>
  <div class="p-10 h-screen overflow-y-auto">
    <div class="max-w-150 flex flex-col gap-10">
      <div class="flex flex-wrap gap-3">
        <MwBadge is-clearable>
          Button
        </MwBadge>
        <MwBadge variant="primary" is-clearable>
          Button
        </MwBadge>
        <MwBadge variant="success" is-clearable>
          Button
        </MwBadge>
        <MwBadge variant="warning" is-clearable>
          Button
        </MwBadge>
        <MwBadge variant="danger" is-clearable>
          Button
        </MwBadge>
      </div>
      <div class="flex flex-wrap gap-3">
        <MwButton>Button</MwButton>
        <MwButton variant="primary">
          Button
        </MwButton>
        <MwButton variant="success">
          Button
        </MwButton>
        <MwButton variant="warning">
          Button
        </MwButton>
        <MwButton variant="danger">
          Button
        </MwButton>
      </div>
      <div>
        <MwButtonGroup>
          <MwButton variant="primary">
            Button
          </MwButton>
          <MwButton variant="success">
            Button
          </MwButton>
          <MwButton variant="warning">
            Button
          </MwButton>
          <MwButton variant="danger">
            Button
          </MwButton>
        </MwButtonGroup>
      </div>
      <div>
        <MwCard>
          <template #title>
            Title
          </template>
          Content of the card.
          Content of the card.
          Content of the card.
        </MwCard>
      </div>
      <div>
        <MwDatepicker v-model="datepickerModel" label="Pick a date" />
      </div>
      <div class="flex flex-wrap gap-3 justify-between">
        <MwDropdown>
          <template #title>
            I am title
          </template>
          <template #toggler>
            <MwButton variant="primary">
              Dropdown
            </MwButton>
          </template>
          <template #items>
            <MwListItem
              v-for="item, index in dropdownItems"
              :key="index"
              v-bind="{ item }"
              is-clickable
            />
          </template>
        </MwDropdown>
        <MwDropdown dropup>
          <template #toggler>
            <MwButton variant="primary">
              <span class="flex items-center gap-1">
                Dropup
                <svg
                  class="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </MwButton>
          </template>
          <template #items>
            <MwListItem
              v-for="item, index in dropdownItems"
              :key="index"
              v-bind="{ item }"
              is-clickable
            />
          </template>
        </MwDropdown>
        <MwDropdown position="right">
          <template #title>
            I am title
          </template>
          <template #toggler>
            <MwButton has-icon variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </MwButton>
          </template>
          <template #items>
            <MwListItem
              v-for="item, index in dropdownItems"
              :key="index"
              v-bind="{ item }"
              is-clickable
            />
          </template>
        </MwDropdown>
      </div>
      <div>
        <MwHeading type="h1">
          I'm Heading
        </MwHeading>
        <MwHeading type="h2">
          I'm Heading
        </MwHeading>
        <MwHeading type="h3">
          I'm Heading
        </MwHeading>
        <MwHeading type="h4">
          I'm Heading
        </MwHeading>
        <MwHeading type="h5">
          I'm Heading
        </MwHeading>
        <MwHeading type="h6">
          I'm Heading
        </MwHeading>
        <MwHeading type="LeadText">
          I'm Lead text
        </MwHeading>
        <MwP>
          I'm a paragraph
        </MwP>
        <MwSmall>
          I'm a small text
        </MwSmall>
      </div>
      <div>
        <MwInput size="sm" variant="primary" label="Small input" />
        <MwInput size="md" variant="secondary" label="Medium input" />
        <MwInput size="lg" variant="success" label="Large input" />
        <MwInput variant="primary" label="Icon input">
          <template #icon>
            <CarbonUser />
          </template>
        </MwInput>
      </div>
      <div>
        <MwList>
          <MwListItem
            v-for="item, index in listItems"
            :key="index"
            v-bind="{ item }"
            is-clickable
          >
            <template #icon>
              <CarbonListBulleted />
            </template>
            <template #actions>
              <MwButton has-icon size="sm" variant="primary">
                <CarbonEdit />
              </MwButton>
            </template>
          </MwListItem>
        </MwList>
      </div>
      <div>
        <MwButton variant="primary" @click="reveal">
          Modal
        </MwButton>
        <MwModal
          v-model="isRevealed"
          has-close-button
          close-on-click-outside
          @cancel="cancel"
        >
          <template #title>
            Modal Title
          </template>
          <template #body>
            {{ modalBody }}
          </template>
          <template #footer>
            <MwButton is-outlined @click="cancel">
              Close
            </MwButton>
            <MwButton variant="primary" @click="confirm">
              Save Changes
            </MwButton>
          </template>
        </MwModal>
      </div>
      <div>
        <MwSelect
          v-model="value"
          :items="selectFetchedItems"
          variant="primary"
          label="Country"
          has-multiple-values
          is-clearable
          has-async-data
          :is-loading="isSelectLoading"
          v-bind="{ errorMessage }"
          @input="selectFetchItems"
        />
      </div>
      <div>
        <MwTable
          is-small
          has-no-local-sorting
          :items="tableItems"
          :is-loading="isTableLoading"
          :fields="tableFields"
          :current-page="1"
          @sort-changed="onSortChange"
        >
          <template #user="{ item }">
            {{ item.user }}
            <template v-if="item.age">
              ({{ item.age }} years old)
            </template>
          </template>
          <template #isActive="{ value: val }">
            <span
              :class="val ? 'text-green-900' : 'text-gray-900'"
              class="relative inline-block px-3 py-1 font-semibold leading-tight"
            >
              <span
                aria-hidden="true"
                :class="val ? 'bg-green-200' : 'bg-gray-200'"
                class="absolute inset-0 opacity-50 rounded-full"
              ></span>
              <span v-if="val" class="relative">active</span>
              <span v-else class="relative">inactive</span>
            </span>
          </template>
          <template #actions>
            <a href="#" class="text-primary-500 font-medium">Edit</a>
          </template>
        </MwTable>
        <MwPagination :nb-items="50" :items-per-page="10" @page-changed="onPageChange" />
      </div>
    </div>
  </div>
</template>
