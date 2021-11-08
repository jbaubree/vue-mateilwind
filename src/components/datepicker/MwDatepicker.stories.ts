import { Meta, Story } from '@storybook/vue3'
import DatepickerComponent from '.'

export default {
  title: 'Datepicker',
  component: DatepickerComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    defaultStep: {
      control: { type: 'select' },
      options: ['day', 'month', 'year']
    },
    months: {
      control: { type: 'array' },
    },
    days: {
      control: { type: 'array' },
    },
    formatOptions: {
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Label',
    defaultStep: 'day',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
  }
} as Meta

const Template: Story = args => ({
  components: { DatepickerComponent },
  setup() {
    return { args }
  },
  template: '<DatepickerComponent v-bind="args" />',
})

export const Datepicker = Template.bind({})


