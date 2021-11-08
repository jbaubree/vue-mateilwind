import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
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
      control: { type: 'object' },
    },
  },
  args: {
    label: 'Label',
    defaultStep: 'day',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
    formatOptions: {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }
  }
} as Meta

const Template: Story = args => ({
  components: { DatepickerComponent },
  setup() {
    const model = ref('')
    return { args, model }
  },
  template: '<DatepickerComponent v-bind="args" v-model="model" />',
})

export const Datepicker = Template.bind({})


