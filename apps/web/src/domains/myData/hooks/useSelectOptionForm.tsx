import { useForm } from 'react-hook-form'

type FormType = {
  option: string
}

export const useSelectOptionForm = () => {
  const form = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      option: '',
    },
  })

  return form
}
