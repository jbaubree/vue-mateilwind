import { app } from '@storybook/vue3'
import i18n from '../src/modules/i18n'

import 'virtual:windi.css'
import '../src/styles/index.scss'

app.use(i18n)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};