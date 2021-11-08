import { Meta, Story } from '@storybook/vue3'
import { useField } from 'vee-validate'
import { ref, watchEffect } from 'vue'
import MwSelect from '.'
import countries from '../../utils/countries'
import type { SelectItem } from '../../types/form'

export default {
  title: 'Select',
  component: MwSelect,
  argTypes: {
    items: {
      control: { type: 'array' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    label: {
      control: { type: 'text' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    isClearable: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    hasAsyncData: {
      control: { type: 'boolean' },
    },
    hasMultipleValues: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'primary',
    label: 'Select a country',
    hasMultipleValues: true,
    isClearable: true,
    hasAsyncData: true,
  }
} as Meta

const Template: Story = (args) => ({
  components: { MwSelect },
  setup() {
    const selectFetchedItems = ref<SelectItem[]>(countries.filter((_, index) => index < 10))
    const isSelectLoading = ref<boolean>(false)
    const selectModel = ref<SelectItem[]>([])

    function validateField(value: Array<SelectItem>): string | boolean {
      if (!value.length)
        return 'This field is required'

      if (value.length < 2)
        return 'This field must contain at least 2 characters'

      return true
    }
    const { value, errorMessage } = useField<Array<SelectItem>>('field', validateField)

    watchEffect(() => {
      value.value = selectModel.value
    })

    function selectFetchItems(search: string | undefined): void {
      isSelectLoading.value = true
      setTimeout(() => {
        if (typeof search === 'string')
          selectFetchedItems.value = countries.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((_, index) => index < 10)

        else
          selectFetchedItems.value = []

        isSelectLoading.value = false
      }, 1000)
    }
    return { args, selectFetchItems, isSelectLoading, selectFetchedItems, value, errorMessage }
  },
  template: `
    <div class="min-h-100">
      <MwSelect
        v-model="value"
        v-bind="args"
        :items="selectFetchedItems"
        :isLoading="isSelectLoading"
        :errorMessage="errorMessage"
        @input="selectFetchItems"
      />
    </div>`,
})

export const Select = Template.bind({})


