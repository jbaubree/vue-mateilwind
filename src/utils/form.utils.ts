import type { ComputedRef, Ref } from 'vue'

export function useForm(props: any, isValidating: Ref<boolean>): {
  inputWrapperClasses: ComputedRef<string>
} {
  const inputWrapperClasses = computed((): string => {
    if (!isValidating.value)
      return `border-${props.variant}-500 form-input__${props.variant}`

    if (props.errorMessage)
      return 'border-danger-500 form-input__danger'

    else
      return 'border-success-500 form-input__success'
  })

  return {
    inputWrapperClasses,
  }
}
