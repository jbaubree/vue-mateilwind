import { Meta, Story } from '@storybook/vue3'
import ButtonComponent from '.'

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'link', 'light', 'light-primary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isBlock: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    isElevated: {
      control: { type: 'boolean' },
    },
    isOutlined: {
      control: { type: 'boolean' },
    },
    hasIcon: {
      control: { type: 'boolean' },
    },
    default: {
      control: 'text',
      description: 'Text',
    },
  },
  args: {
    variant: 'secondary',
    size: 'md',
    isBlock: false,
    isDisabled: false,
    isLoading: false,
    isElevated: false,
    isOutlined: false,
    hasIcon: false,
    default: 'Btn',
  }
} as Meta

const Template: Story = args => ({
  components: { ButtonComponent },
  setup() {
    return { args }
  },
  template: '<ButtonComponent v-bind="args">{{ args.default }}</ButtonComponent>',
})

export const Button = Template.bind({})


