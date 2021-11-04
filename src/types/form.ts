export type InputType =
| 'text'
| 'number'
| 'email'
| 'password'
| 'search'
| 'tel'
| 'date'
| 'time'
| 'range'
| 'color'

export type InputSize =
| 'sm'
| 'md'
| 'lg'

export type SelectItem = {
  title: string
  value: string
}
