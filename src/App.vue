<script setup lang="ts">
import countries from '@/utils/countries'
import type { SelectItem } from '@/types'

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

const selectFetchedItems = ref<SelectItem[]>(countries.filter((_, index) => index < 10))
const selectedItems = ref<SelectItem | ''>({ title: 'Afghanistan', value: 'AF' })

</script>
<template>
  Coucou
  <MwAlert :is-clearable="true">
    Test
  </MwAlert>
  {{ $t('mw.home.welcome') }}
  {{ $t('test') }}
  <MwDatepicker label="date" />

  <MwButton variant="primary" @click="reveal">
    Modal
  </MwButton>
  <MwModal
    v-model="isRevealed"
    size="md"
    close-on-click-outside
    has-close-button
    @cancel="cancel"
  >
    <template #title>
      Modal Title
    </template>
    <template #body>
      {{ modalBody }}
    </template>
    <template #footer>
      <MwButton is-outlined variant="secondary" @click="cancel">
        Close
      </MwButton>
      <MwButton variant="primary" @click="confirm">
        Save Changes
      </MwButton>
    </template>
  </MwModal>

  <MwSelect
    v-model="selectedItems"
    label="salut"
    is-clearable
    :items="selectFetchedItems"
  />
  {{ selectedItems }}
</template>
