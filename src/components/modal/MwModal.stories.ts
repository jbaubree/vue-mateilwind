import { Meta, Story } from '@storybook/vue3'
import MwModal from '.'
import MwModalItem from '../list-item'
import MwButton from '../button'
import { useConfirmDialog } from '@vueuse/core'

export default {
  title: 'Modal',
  component: MwModal,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    hasCloseButton: {
      control: { type: 'boolean' },
    },
    closeOnClickOutside: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'md',
    hasCloseButton: false,
    closeOnClickOutside: false,
  }
} as Meta

const Template: Story = args => ({
  components: { MwModal, MwModalItem, MwButton },
  setup() {
    const {
      isRevealed,
      reveal,
      confirm,
      cancel,
    } = useConfirmDialog()
    
    const modalBody = `I always felt like I could do anything. That’s the main
      thing people are controlled by! Thoughts- their perception
      of themselves! They're slowed down by their perception of
      themselves. If you're taught you can’t do anything, you
      won’t do anything. I was taught I could do everything.`
    
    return {
      args,
      isRevealed,
      reveal,
      confirm,
      cancel,
      modalBody,
    }
  },
  template: `
    <div>
      <MwButton variant="primary" @click="reveal">
        Modal
      </MwButton>
      <MwModal
        v-model="isRevealed"
        v-bind="args"
        @cancel="cancel"
      >
        <template #title>
          Modal Title
        </template>
        <template #body>
          {{ modalBody }}
        </template>
        <template #footer>
          <MwButton is-outlined @click="cancel">
            Close
          </MwButton>
          <MwButton variant="primary" @click="confirm">
            Save Changes
          </MwButton>
        </template>
      </MwModal>
    </div>`,
})

export const Modal = Template.bind({})


