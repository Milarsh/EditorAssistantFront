import { type SourceCreate } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/form-base'
import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

const initialValues: SourceCreate = {
  name: '',
  rss_url: '',
  enabled: false
}

export const SourceForm = () => {

  const handleSubmit = (values: SourceCreate) => {
    console.log(values)
  }

  return (
    <BaseForm<SourceCreate>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col gap-3 border-t border-slate-300 pt-4"
      render={({ values, handleChange }) => (
        <>
          <Typography variant="h3">Добавить источник</Typography>
          <TextField
            name="rss_url"
            placeholder="Выберите ссылку на источник"
            value={values.rss_url}
            onChange={handleChange}
          />
          <TextField
            name="name"
            placeholder="Выберите название источника"
            value={values.name}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">Отправить</Button>
        </>
      )}
    />
  )
}
