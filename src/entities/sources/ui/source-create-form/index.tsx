import { type SourceCreate } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/form-base'
import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

import { useSourceCreate } from '../../lib/use-source-create.ts'

// ToDo: урлы источников
// https://russian.rt.com/rss
// https://rss.feedspot.com/political_news_rss_feeds

const initialValues: SourceCreate = {
  name: '',
  rss_url: '',
}

export const SourceCreateForm = () => {
  const { mutate, isPending } = useSourceCreate()

  return (
    <BaseForm<SourceCreate>
      initialValues={initialValues}
      onSubmit={mutate}
      className="vertical mt-6 gap-3 border-t border-slate-300 pt-4"
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

          <Button disabled={isPending} variant="primary" type="submit">
            Отправить
          </Button>
        </>
      )}
    />
  )
}
