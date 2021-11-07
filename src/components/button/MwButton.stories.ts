import type { ButtonSize, ButtonVariant } from '@/types/button'
import { Story } from '@/types/storybook'
import ButtonComponent from './MwButton.vue'

interface ButtonProps {
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  isBlock?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  isElevated?: boolean
  isOutlined?: boolean
  hasIcon?: boolean
}

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    href: {
      control: { type: 'string' },
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
  }
}

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  components: { ButtonComponent },
  setup() {
    return { args }
  },
  template: '<ButtonComponent v-bind="args">Btn</ButtonComponent>',
})

export const Button = Template.bind({})


