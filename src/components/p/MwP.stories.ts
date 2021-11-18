import { Meta, Story } from '@storybook/vue3'
import MwP from '.'

export default {
  title: 'Components/P',
  component: MwP,
  argTypes: {
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
    default: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
} as Meta

const Template: Story = args => ({
  components: { MwP },
  setup() {
    return { args }
  },
  template: `
    <MwP v-bind="args">
      {{ args.default }}
    </MwP>`,
})

export const P = Template.bind({})
