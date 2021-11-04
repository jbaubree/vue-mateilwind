export type SortDirection = 'asc' | 'desc' | ''

export type TableField = {
  label: string
  value: string
  isSortable?: boolean
  thClass?: string
  tdClass?: string
  minWidth?: number
}

export type TableSortChangeEventContext = {
  currentSortDir: SortDirection
  currentSortField: string
}
