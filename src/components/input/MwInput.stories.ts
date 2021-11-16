import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import MwInput from '.'

export default {
  title: 'Input',
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
    icon: {
      control: 'text',
      description: 'Icon',
    },
  },
  args: {
    variant: 'primary',
    type: 'text',
    label: 'Label',
    size: 'md',
    hasValidation: false,
    icon: '',
  }
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
    //   icon: '',
    // }
    const model = ref('')
    return { args, model }
  },
  template: `
    <MwInput v-bind="args" v-model="model">
      <template #icon>
        {{ args.icon }}
      </template>
    </MwInput>`,
})

export const Input = Template.bind({})


