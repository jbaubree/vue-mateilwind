import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        // Custom colors
        'primary': colors.violet,
        'secondary': colors.gray,
        'success': colors.green,
        'warning': colors.amber,
        'danger': colors.red,
        'link': colors.blue,
        'light': {
          500: 'white',
          700: colors.gray[200],
        },
        'light-primary': {
          500: 'white',
          700: colors.violet[200],
        },
      },
    },
  },
  extract: {
    include: [
      'src/**/*.{vue,windi.ts}',
    ],
  },
})
