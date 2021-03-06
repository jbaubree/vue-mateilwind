import { Meta, Story } from '@storybook/vue3'
import MwButton from '.'

export default {
  title: 'Components/Button',
  component: MwButton,
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
    variant: 'primary',
    size: 'md',
    isBlock: false,
    isDisabled: false,
    isLoading: false,
    isElevated: false,
    isOutlined: false,
    hasIcon: false,
    default: 'Btn',
  },
} as Meta

const Template: Story = args => ({
  components: { MwButton },
  setup() {
    // args: {
    //   variant: 'primary',
    //   size: 'md',
    //   isBlock: false,
    //   isDisabled: false,
    //   isLoading: false,
    //   isElevated: false,
    //   isOutlined: false,
    //   hasIcon: false,
    //   default: 'Btn',
    // }
    return { args }
  },
  template: '<MwButton v-bind="args">{{ args.default }}</MwButton>',
})

export const Button = Template.bind({})
