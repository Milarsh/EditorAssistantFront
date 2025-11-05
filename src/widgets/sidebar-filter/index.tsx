import { type FC, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { RadioGroup, CheckboxGroup } from '@/shared/ui/input'
import { Sidebar } from '@/shared/ui/sidebar'
import { BaseForm } from '@/shared/ui/form-base'

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const SidebarFilter: FC<SidebarFilterProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [source, setSource] = useState('1')
  const [categories, setCategories] = useState<string[]>([])


  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className="flex items-center justify-between border-b border-gray-200
          px-5 py-4"
      >
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl leading-none text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-5 py-4">
        <BaseForm
          initialValues={{source, categories}}
          onSubmit={() => {}}
          render={() => (
              <div className='vertical gap-4'>
                <RadioGroup
                  title="Источники"
                  value={source}
                  onChange={setSource}
                  options={[
                    { label: 'Риа Новости', value: '1' },
                    { label: 'Telegram news', value: '2' },
                    { label: 'ТАСС', value: '3' },
                    { label: 'Паблик цитатник', value: '4' },
                    { label: 'Коммерсантъ', value: '5' },
                  ]}
                />
                <CheckboxGroup
                  title="По времени"
                  value={categories}
                  onChange={setCategories}
                  options={[
                    { label: 'Сегодня', value: 'Сегодня' },
                    { label: 'Через 3 дня', value: 'Через 3 дня' },
                    { label: 'Через 5 дней', value: 'Через 5 дней' },
                    { label: 'Через неделю', value: 'Через неделю' },
                    { label: 'Через 2 недели', value: 'Через 2 неделb' },
                  ]}
                />
              </div>
          )}
        />
      </div>

      <div className="border-t border-gray-200 p-4">
        <Button onClick={() => setIsOpen(false)}>Применить фильтры</Button>
      </div>
    </Sidebar>
  )
}
