import { Meta } from '@storybook/addon-docs';

<Meta title="Intro/Installation" />

# Welcome to Vue Mateilwind

Vue-mateilwind is a library of graphic components compatible with Vue3 and typescript developed with Windicss.

## Install

You need [Vue.js](https://v3.vuejs.org/) version 3.0+

Using NPM
```bash
npm install vue-mateilwind
```
Using Yarn
```bash
yarn add vue-mateilwind
```
Using PNPM
```bash
pnpm install vue-mateilwind
```

## Usage

All components

```js
import { createApp } from 'vue'
import VueMateilwind from 'vue-mateilwind'
import 'vue-mateilwind/dist/style.css'

createApp.use(VueMateilwind)
```

Or individual components

```js
import { createApp } from 'vue'
import { MwButton, MwSelect } from 'vue-mateilwind'
import 'vue-mateilwind/dist/style.css'

createApp.use(MwButton).use(MwSelect)
```