import { Meta, Story } from '@storybook/vue3'
import BadgeComponent from '.'

export default {
  title: 'Badge',
  component: BadgeComponent,
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
    variant: 'secondary',
    isClearable: false,
    default: 'Badge',
  }
} as Meta

const Template: Story = args => ({
  components: { BadgeComponent },
  setup() {
    return { args }
  },
  template: '<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>',
})

export const Badge = Template.bind({})


