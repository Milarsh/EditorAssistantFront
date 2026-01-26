import { type FC } from 'react'

import { Button } from '@/shared/ui/button'
// import type { FormFieldConfig } from '@/shared/ui/form/ui'
import { FormBuilder } from '@/shared/ui/form'
import { Sidebar } from '@/shared/ui/sidebar'

// const sidebarFilterFieldsConfig: FormFieldConfig<unknown>[] = [
//   {
//     type: 'radio',
//     name: 'source',
//     props: {
//       title: 'Источники',
//       options: [
//         { label: 'Риа Новости', value: '1' },
//         { label: 'Telegram news', value: '2' },
//         { label: 'ТАСС', value: '3' },
//         { label: 'Паблик цитатник', value: '4' },
//         { label: 'Коммерсантъ', value: '5' },
//       ],
//       value: '',
//     },
//   },
//   {
//     type: 'checkbox',
//     name: 'categories',
//     props: {
//       title: 'По времени',
//       options: [
//         { label: 'Сегодня', value: 'Сегодня' },
//         { label: 'Через 3 дня', value: 'Через 3 дня' },
//         { label: 'Через 5 дней', value: 'Через 5 дней' },
//         { label: 'Через неделю', value: 'Через неделю' },
//         { label: 'Через 2 недели', value: 'Через 2 недели' },
//       ],
//       value: [''],
//     },
//   },
// ]

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

type FilterValues = {
  source: string
  categories: string[]
}

const initialValues: FilterValues = {
  source: '1',
  categories: [],
}

export const SidebarFilter: FC<SidebarFilterProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const handleSubmit = () => {
    setIsOpen(false)
  }

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className="flex items-center justify-between border-b border-gray-200
          px-5 py-4"
      >
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-xl leading-none text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <FormBuilder<FilterValues>
          fields={[]}
          initialValue={initialValues}
          onSubmit={handleSubmit}
          customSubmitComponent={
            <div className="border-t border-gray-200 p-4">
              <Button type="submit">Применить фильтры</Button>
            </div>
          }
        />
      </div>
    </Sidebar>
  )
}
