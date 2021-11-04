import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    WindiCSS(),
    Icons({
      autoInstall: true,
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-mateilwind',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
