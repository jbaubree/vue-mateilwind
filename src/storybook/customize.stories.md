import { Meta } from '@storybook/addon-docs';

<Meta title="Intro/Customize" />

# Customization

You can customize all Vue mateilwind style.

Add windicss locally in your project.
```bash
npm install vite-plugin-windicss -d
```

Create windi.config.ts and customize variables.

Example:
```js
// windi.config.ts
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'success': {
          500: 'var(--color-green-500)'
        },
        'red': colors.red
      },
      fontSize: {
        '4xl': '10rem'
      }
    },
  },
})
```

```js
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueMateilwind from 'vue-mateilwind'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// Import vue mateilwind style before own style
import 'vue-mateilwind/dist/style.css'
import './styles/index.scss'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

createApp(App).use(VueMateilwind).mount('#app')
```

```css
// styles/index.scss
:root {
    --color-green-500: #2967db;
}
```