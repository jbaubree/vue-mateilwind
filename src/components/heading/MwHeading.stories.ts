import { Meta, Story } from '@storybook/vue3'
import MwHeading from '.'

export default {
  title: 'Heading',
  component: MwHeading,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'LeadText'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    default: {
      control: 'text',
      description: 'Text',
    },
  },
  args: {
    type: 'h1',
    default: 'I am Heading',
  }
} as Meta

const Template: Story = args => ({
  components: { MwHeading },
  setup() {
    // args: {
    //   type: 'h1',
    //   default: 'I am Heading',
    // }
    return { args }
  },
  template: `
    <MwHeading v-bind="args">
      {{ args.default }}
    </MwHeading>`,
})

export const Heading = Template.bind({})


