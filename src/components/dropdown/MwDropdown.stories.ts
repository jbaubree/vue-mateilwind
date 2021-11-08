import { Meta, Story } from '@storybook/vue3'
import MwDropdown from '.'
import MwButton from '../button'
import MwListItem from '../list-item'
import type { ListItem } from '../../types/list'

export default {
  title: 'Dropdown',
  component: MwDropdown,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    dropup: {
      control: { type: 'boolean' },
    },
    closeOnItemClick: {
      control: { type: 'boolean' },
    },
  },
  args: {
    position: 'left',
    dropup: false,
    closeOnItemClick: false,
    default: 'Dropdown',
  }
} as Meta

const Template: Story = args => ({
  components: { MwDropdown, MwButton, MwListItem },
  setup() {
    const dropdownItems: ListItem[] = [
      {
        title: 'Dropdown item 1',
      },
      {
        title: 'Dropdown item 2',
      },
      {
        title: 'Dropdown item 3',
      },
    ]
    return { args, dropdownItems }
  },
  template: `
    <MwDropdown class="min-h-50 mt-45" v-bind="args">
      <template #title>
        I am title
      </template>
      <template #toggler>
        <MwButton variant="primary">
          {{ args.default }}
        </MwButton>
      </template>
      <template #items>
        <MwListItem
          v-for="item, index in dropdownItems"
          :key="index"
          v-bind="{ item }"
          :isClickable="true"
        />
      </template>
    </MwDropdown>`,
})

export const Dropdown = Template.bind({})


