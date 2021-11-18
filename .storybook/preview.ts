import { createI18n } from 'vue-i18n'
import { app } from '@storybook/vue3'
import i18nOptions from '../src/modules/i18n'
 
import 'virtual:windi.css'
import '../src/styles/index.scss'

app.use(createI18n(i18nOptions))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Intro', ['Installation', 'Customize', 'i18n'], 'Components'], 
    },
  },
};