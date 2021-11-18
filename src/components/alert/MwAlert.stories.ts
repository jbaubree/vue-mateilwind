import { Meta, Story } from '@storybook/vue3'
import MwAlert from '.'

export default {
  title: 'Components/Alert',
  component: MwAlert,
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
    default: 'Hey, this is an alert',
  },
} as Meta

const Template: Story = args => ({
  components: { MwAlert },
  setup() {
    // args: {
    //   variant: 'primary',
    //   isClearable: false,
    //   default: 'Hey, this is an alert',
    // }
    return { args }
  },
  template: '<MwAlert v-bind="args">{{ args.default }}</MwAlert>',
})

export const Alert = Template.bind({})
