# Install

You need [Vue.js](https://v3.vuejs.org/) version 3.0+

```bash
# npm
npm install vue-mateilwind
```

```bash
# yarn
yarn add vue-mateilwind
```

# Usage

## All components

```js
import { createApp } from 'vue'
import VueMateilwind from 'vue-mateilwind'
import 'vue-mateilwind/dist/style.css'

createApp.use(VueMateilwind)
```

## Or individual components

```js
import { createApp } from 'vue'
import { MwButton, MwSelect } from 'vue-mateilwind'
import 'vue-mateilwind/dist/style.css'

createApp.use(MwButton).use(MwSelect)
```
