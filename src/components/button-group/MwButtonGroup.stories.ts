import { Meta, Story } from '@storybook/vue3'
import MwButtonGroup from '.'
import MwButton from '../button'

export default {
  title: 'Button Group',
  component: MwButtonGroup,
} as Meta

const Template: Story = args => ({
  components: { MwButtonGroup, MwButton },
  setup() {
    return { args }
  },
  template: `
    <MwButtonGroup>
      <MwButton variant="primary">Button</MwButton>
      <MwButton variant="primary">Button</MwButton>
      <MwButton variant="primary">Button</MwButton>
    </MwButtonGroup>`,
})

export const ButtonGroup = Template.bind({})


