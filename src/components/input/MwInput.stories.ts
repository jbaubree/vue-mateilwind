import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import MwInput from '.'

export default {
  title: 'Components/Input',
  component: MwInput,
  argTypes: {
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
  },
  args: {
    variant: 'primary',
    type: 'text',
    label: 'Label',
    size: 'md',
    hasValidation: false,
  },
} as Meta

const Template: Story = args => ({
  components: { MwInput },
  setup() {
    // args: {
    //   variant: 'primary',
    //   type: 'text',
    //   label: 'Label',
    //   size: 'md',
    //   hasValidation: false,
    // }
    const leftIcon = ref('ICO')
    const rightIcon = ref('ICO')
    const model = ref('')
    return { args, model, leftIcon, rightIcon }
  },
  template: `
    <MwInput v-bind="args" v-model="model">
      <template #leftIcon>
        {{ leftIcon }}
      </template>
      <template #rightIcon>
        {{ rightIcon }}
      </template>
    </MwInput>`,
})

export const Input = Template.bind({})
