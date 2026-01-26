import type { SourceCreate } from '@/shared/api'
import type { FormFieldConfig } from '@/shared/ui/form/ui'
import { FormWrapper } from '@/shared/ui/form/ui'

import { useSourceCreate } from '../../lib/use-source-create'

export const sourceCreateFieldsConfig: FormFieldConfig<SourceCreate>[] = [
  {
    type: 'text',
    name: 'rss_url',
    props: {
      placeholder: 'Выберите ссылку на источник',
    },
  },
  {
    type: 'text',
    name: 'name',
    props: {
      placeholder: 'Выберите название источника',
    },
  },
]

const initialValues: SourceCreate = {
  name: '',
  rss_url: '',
}

export const SourceCreateForm = () => {
  const { mutateAsync, normalizedError } = useSourceCreate()

  return (
    <FormWrapper<SourceCreate>
      fields={sourceCreateFieldsConfig}
      initialValue={initialValues}
      onSubmit={mutateAsync}
      formError={normalizedError}
    />
  )
}
