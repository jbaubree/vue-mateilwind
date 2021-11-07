import { Variant } from '../../types/common'
import { Story } from '../../types/storybook'
import BadgeComponent from '.'

interface BadgeProps {
  variant?: Variant;
  isClearable?: boolean;
}

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
  },
  args: {
    variant: 'secondary',
    isClearable: false,
  }
}

const Template: Story<BadgeProps> = (args: BadgeProps) => ({
  components: { BadgeComponent },
  setup() {
    return { args }
  },
  template: '<BadgeComponent v-bind="args">Badge</BadgeComponent>',
})

export const Badge = Template.bind({})


