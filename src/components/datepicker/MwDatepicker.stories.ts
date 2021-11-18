import { Meta, Story } from '@storybook/vue3'
import { ref } from 'vue'
import MwDatepicker from '.'

export default {
  title: 'Components/Datepicker',
  component: MwDatepicker,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    defaultStep: {
      control: { type: 'select' },
      options: ['day', 'month', 'year'],
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
    },
  },
} as Meta

const Template: Story = args => ({
  components: { MwDatepicker },
  setup() {
    // args: {
    //   label: 'Label',
    //   defaultStep: 'day',
    //   months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //   days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'],
    //   formatOptions: {
    //     weekday: 'short',
    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric',
    //   }
    // }
    const model = ref('')
    return { args, model }
  },
  template: '<MwDatepicker v-bind="args" v-model="model" />',
})

export const Datepicker = Template.bind({})
