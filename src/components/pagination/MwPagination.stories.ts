import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import MwPagination from '.'
import type { PaginationChangeEventContext } from '../../types'

export default {
  title: 'Pagination',
  component: MwPagination,
  argTypes: {
    nbItems: {
      control: { type: 'number' },
    },
    itemsPerPage: {
      control: { type: 'number' },
    },
  },
  args: {
    nbItems: 20,
    itemsPerPage: 5,
  }
} as Meta

const Template: Story = args => ({
  components: { MwPagination },
  setup() {
    const currentPage = ref<number>(1)
    function onPageChange(context: PaginationChangeEventContext): void {
      currentPage.value = context.currentPage
    }
    return { args, currentPage, onPageChange }
  },
  template: `
    <div class="flex flex-col gap-2">
      <MwPagination v-bind="args" @page-changed="onPageChange" />
      <span>Page : {{ currentPage }}</span>
    </div>`,
})

export const Pagination = Template.bind({})


