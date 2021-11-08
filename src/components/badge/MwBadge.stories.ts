import { Meta, Story } from '@storybook/vue3'
import MwBadge from '.'

export default {
  title: 'Badge',
  component: MwBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    isClearable: {
      control: { type: 'boolean' },
    },
    default: {
      control: 'text',
      description: 'Text',
    },
  },
  args: {
    variant: 'primary',
    isClearable: false,
    default: 'Badge',
  }
} as Meta

const Template: Story = args => ({
  components: { MwBadge },
  setup() {
    return { args }
  },
  template: '<MwBadge v-bind="args">{{ args.default }}</MwBadge>',
})

export const Badge = Template.bind({})


