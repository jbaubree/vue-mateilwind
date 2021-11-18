import { Meta, Story } from '@storybook/vue3'
import MwPagination from '../pagination'
import MwTable from '.'

export default {
  title: 'Components/Table',
  component: MwTable,
  argTypes: {
    fields: {
      control: { type: 'array' },
    },
    items: {
      control: { type: 'array' },
    },
    itemsPerPage: {
      control: { type: 'number' },
    },
    currentPage: {
      control: { type: 'number' },
    },
    isStriped: {
      control: { type: 'boolean' },
    },
    isHoverable: {
      control: { type: 'boolean' },
    },
    isSmall: {
      control: { type: 'boolean' },
    },
    isBordered: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    hasNoLocalSorting: {
      control: { type: 'boolean' },
    },
    hasStickyHeader: {
      control: { type: 'boolean' },
    },
  },
  args: {
    fields: [
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
    ],
    items: [
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
    ],
    itemsPerPage: 2,
    currentPage: 1,
    isStriped: false,
    isHoverable: false,
    isSmall: true,
    isBordered: false,
    isLoading: false,
    hasNoLocalSorting: false,
    hasStickyHeader: false,
  },
} as Meta

const Template: Story = args => ({
  components: { MwTable, MwPagination },
  setup() {
    // args: {
    //   fields: [
    //     {
    //       label: 'User',
    //       value: 'user',
    //       isSortable: true,
    //       minWidth: 120,
    //     },
    //     ...
    //     {
    //       label: '',
    //       value: 'actions',
    //       tdClass: 'justify-end',
    //     },
    //   ],
    //   items: [
    //     {
    //       user: 'Jean Marc',
    //       age: 30,
    //       role: 'Admin',
    //       createdAt: '12/09/2020',
    //       isActive: true,
    //     },
    //     ...
    //   ],
    //   itemsPerPage: 2,
    //   currentPage: 1,
    //   isStriped: false,
    //   isHoverable: false,
    //   isSmall: true,
    //   isBordered: false,
    //   isLoading: false,
    //   hasNoLocalSorting: false,
    //   hasStickyHeader: false,
    // }
    return { args }
  },
  template: `
    <MwTable
      v-bind="args"
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
    </MwTable>`,
})

export const Table = Template.bind({})
