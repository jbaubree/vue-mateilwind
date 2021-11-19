import type { ComputedRef, Ref } from 'vue'
import { useStyle } from '@/utils/style.windi'

export function useForm(props: any, isValidating: Ref<boolean>): {
  inputWrapperClasses: ComputedRef<string>
} {
  const { border500 } = useStyle(props.variant)

  const inputWrapperClasses = computed((): string => {
    if (!isValidating.value)
      return `${border500.value} form-input__${props.variant}`

    if (props.errorMessage)
      return 'border-danger-500 form-input__danger'

    else
      return 'border-success-500 form-input__success'
  })

  return {
    inputWrapperClasses,
  }
}
