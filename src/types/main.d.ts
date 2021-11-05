declare module 'vue' {
  export interface GlobalComponents {
    MwBadge: typeof import('./components/badge/MwBadge.vue')['default']
    MwButton: typeof import('./components/button/MwButton.vue')['default']
    MwButtonGroup: typeof import('./components/button-group/MwButtonGroup.vue')['default']
    MwButtonLoader: typeof import('./components/button-loader/MwButtonLoader.vue')['default']
    MwCard: typeof import('./components/card/MwCard.vue')['default']
    MwDatepicker: typeof import('./components/datepicker/MwDatepicker.vue')['default']
    MwDropdown: typeof import('./components/dropdown/MwDropdown.vue')['default']
    MwHeading: typeof import('./components/heading/MwHeading.vue')['default']
    MwInput: typeof import('./components/input/MwInput.vue')['default']
    MwList: typeof import('./components/list/MwList.vue')['default']
    MwListItem: typeof import('./components/list-item/MwListItem.vue')['default']
    MwModal: typeof import('./components/modal/MwModal.vue')['default']
    MwP: typeof import('./components/p/MwP.vue')['default']
    MwPagination: typeof import('./components/pagination/MwPagination.vue')['default']
    MwSelect: typeof import('./components/select/MwSelect.vue')['default']
    MwSmall: typeof import('./components/small/MwSmall.vue')['default']
    MwTable: typeof import('./components/table/MwTable.vue')['default']
  }
}

export { }

declare module 'vue-mateilwind' {
  const install: PluginFunction<{}>

  export declare namespace MwBadge {
    const install: PluginFunction<{}>
  }
  export declare namespace MwButton {
    const install: PluginFunction<{}>
  }
  export declare namespace MwButtonGroup {
    const install: PluginFunction<{}>
  }
  export declare namespace MwButtonLoader {
    const install: PluginFunction<{}>
  }
  export declare namespace MwCard {
    const install: PluginFunction<{}>
  }
  export declare namespace MwDatepicker {
    const install: PluginFunction<{}>
  }
  export declare namespace MwDropdown {
    const install: PluginFunction<{}>
  }
  export declare namespace MwHeading {
    const install: PluginFunction<{}>
  }
  export declare namespace MwInput {
    const install: PluginFunction<{}>
  }
  export declare namespace MwList {
    const install: PluginFunction<{}>
  }
  export declare namespace MwListItem {
    const install: PluginFunction<{}>
  }
  export declare namespace MwModal {
    const install: PluginFunction<{}>
  }
  export declare namespace MwP {
    const install: PluginFunction<{}>
  }
  export declare namespace MwPagination {
    const install: PluginFunction<{}>
  }
  export declare namespace MwSelect {
    const install: PluginFunction<{}>
  }
  export declare namespace MwSmall {
    const install: PluginFunction<{}>
  }
  export declare namespace MwTable {
    const install: PluginFunction<{}>
  }
}
