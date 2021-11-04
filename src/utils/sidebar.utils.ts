import { RemoveableRef, useLocalStorage } from '@vueuse/core'

const isSidebarCollapsed: RemoveableRef<boolean> = useLocalStorage('isSidebarCollapsed', false)

export function useSidebar(): {
  toggleSidebar(): void
  isSidebarCollapsed: RemoveableRef<boolean>
} {
  function toggleSidebar() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }

  return {
    isSidebarCollapsed,
    toggleSidebar,
  }
}
