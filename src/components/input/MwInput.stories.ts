import { Meta, Story } from '@storybook/vue3'
import InputComponent from '.'

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    modelValue: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    type: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    errorMessage: {
      control: { type: 'text' },
    },
    hasValidation: {
      control: { type: 'boolean' },
    },
    icon: {
      control: 'text',
      description: 'Icon',
    },
  },
  args: {
    modelValue: '',
    variant: 'primary',
    type: 'text',
    label: 'Label',
    size: 'md',
    hasValidation: false,
    icon: '',
  }
} as Meta

const Template: Story = args => ({
  components: { InputComponent },
  setup() {
    return { args }
  },
  template: `
    <InputComponent v-bind="args">
      <template #icon>
        {{ args.icon }}
      </template>
    </InputComponent>`,
})

export const Input = Template.bind({})


