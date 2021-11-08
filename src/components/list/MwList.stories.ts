import { Meta, Story } from '@storybook/vue3'
import MwList from '.'
import MwListItem from '../list-item'
import MwButton from '../button'
import type { ListItem } from '../../types/list'

export default {
  title: 'List',
  component: MwList,
} as Meta

const Template: Story = args => ({
  components: { MwList, MwListItem, MwButton },
  setup() {
    const listItems: ListItem[] = [
      {
        title: 'Brunch this weekend?',
        subtitle: 'Ali Connors — I will be in your neighborhood doing errands this weekend. Do you want to hang out?',
      },
      {
        title: 'Summer BBQ',
        subtitle: 'to Alex, Scott, Jennifer — Wish I could come, but I am out of town this weekend.',
      },
      {
        title: 'Oui oui',
        subtitle: 'Sandra Adams — Do you have Paris recommendations? Have you ever been?',
      },
      {
        title: 'Birthday gift',
        subtitle: 'Trevor Hansen — Have any ideas about what we should get Heidi for her birthday?',
      },
    ]
    return { args, listItems }
  },
  template: `
    <MwList>
      <MwListItem
        v-for="item, index in listItems"
        :key="index"
        v-bind="{ item }"
        :isClickable="true"
      >
        <template #icon>
          Icon
        </template>
        <template #actions>
          <MwButton :hasIcon="true" size="sm" variant="primary">
            <small class="font-normal">Btn</small>
          </MwButton>
        </template>
      </MwListItem>
    </MwList>`,
})

export const List = Template.bind({})


