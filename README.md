# Install

You need [Vue.js](https://v3.vuejs.org/) version 3.0+

```bash
# npm
npm install equal-vue
```

```bash
# yarn
yarn add equal-vue
```

# Usage

## All components

```js
import { createApp } from 'vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Equal)
```

## Or individual components

```js
import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Button).use(Alert).use(Switch)
```
