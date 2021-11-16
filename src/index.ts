import { App } from 'vue'

import { createI18n } from 'vue-i18n'
import i18nOptions from './modules/i18n'
import merge from 'lodash.merge'

import MwBadge from './components/badge'
import MwButton from './components/button'
import MwButtonGroup from './components/button-group'
import MwButtonLoader from './components/button-loader'
import MwCard from './components/card'
import MwDatepicker from './components/datepicker'
import MwDropdown from './components/dropdown'
import MwHeading from './components/heading'
import MwInput from './components/input'
import MwList from './components/list'
import MwListItem from './components/list-item'
import MwModal from './components/modal'
import MwP from './components/p'
import MwPagination from './components/pagination'
import MwSelect from './components/select'
import MwSmall from './components/small'
import MwTable from './components/table'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

import './styles/index.scss'
import 'virtual:windi-utilities.css'

import 'virtual:windi-devtools'

const components = {
  MwBadge,
  MwButton,
  MwButtonGroup,
  MwButtonLoader,
  MwCard,
  MwDatepicker,
  MwDropdown,
  MwHeading,
  MwInput,
  MwList,
  MwListItem,
  MwModal,
  MwP,
  MwPagination,
  MwSelect,
  MwSmall,
  MwTable,
}

function install(Vue: App, options) {
  if (options?.messages) {
    i18nOptions.messages = merge(
      {},
      i18nOptions.messages,
      options.messages
    )
  }
  Vue.use(createI18n(i18nOptions))
  // eslint-disable-next-line no-restricted-syntax
  for (const component in components) {
    // @ts-ignore
    Vue.component(component, components[component])
  }
}

export default { install }

export { default as MwBadge } from './components/badge'
export { default as MwButton } from './components/button'
export { default as MwButtonGroup } from './components/button-group'
export { default as MwButtonLoader } from './components/button-loader'
export { default as MwCard } from './components/card'
export { default as MwDatepicker } from './components/datepicker'
export { default as MwDropdown } from './components/dropdown'
export { default as MwHeading } from './components/heading'
export { default as MwInput } from './components/input'
export { default as MwList } from './components/list'
export { default as MwListItem } from './components/list-item'
export { default as MwModal } from './components/modal'
export { default as MwP } from './components/p'
export { default as MwPagination } from './components/pagination'
export { default as MwSelect } from './components/select'
export { default as MwSmall } from './components/small'
export { default as MwTable } from './components/table'
