import { Story } from '../../types/storybook'
import CardComponent from '.'

interface CardProps {
}

export default {
  title: 'Card',
  component: CardComponent,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title',
    },
    default: {
      control: 'text',
      description: 'Content',
    },
  },
  args: {
    title: 'Card title',
    default: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }
}

const Template: Story<CardProps> = (args: CardProps) => ({
  components: { CardComponent },
  setup() {
    return { args }
  },
  template: `
    <CardComponent v-bind="args">
      <template #title>{{ args.title }}</template>
      {{ args.default }}
    </CardComponent>
  `,
})

export const Card = Template.bind({})


