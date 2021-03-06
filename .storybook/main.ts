const path = require('path')
const WindiCSS = require('vite-plugin-windicss').default
const Icons = require('unplugin-icons/vite')
const IconsResolver = require('unplugin-icons/resolver')
const Components = require('unplugin-vue-components/vite')
const AutoImport = require('unplugin-auto-import/vite')
const VueI18n = require('@intlify/vite-plugin-vue-i18n').default
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: [
    "../src/components/**/*.stories.ts",
    "../src/storybook/**/*.stories.md"
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-measure',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? []
    config.plugins.push(
      WindiCSS({
        config: path.join(__dirname, '..', 'windi.config.ts'),
        root: path.dirname(__dirname),
      })
    )
    config.plugins.push(AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }))
    config.plugins.push(Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }))
    config.plugins.push(Icons({
      autoInstall: true,
    }))
    config.plugins.push(VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, '..', 'locales/**')],
    }))

    return {
      ...config,
      resolve: {
        alias: {
          '@/': `${path.resolve(__dirname, '..', 'src')}/`,
          'vue': 'vue/dist/vue.esm-bundler.js',
        },
      }
    }
  }
}
