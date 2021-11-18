import { Meta, Story } from '@storybook/vue3'
import MwCard from '.'

export default {
  title: 'Components/Card',
  component: MwCard,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title',
    },
    text: {
      control: 'text',
      description: 'Content',
    },
  },
  args: {
    title: 'Card title',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
} as Meta

const Template: Story = args => ({
  components: { MwCard },
  setup() {
    return { args }
  },
  template: `
    <MwCard v-bind="args">
      <template #title>{{ args.title }}</template>
      <template #text>{{ args.text }}</template>
    </MwCard>
  `,
})

export const Card = Template.bind({})
