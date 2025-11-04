import { type FC, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { FilterGroup } from '@/shared/ui/filter-group'
import { Checkbox, Radio } from '@/shared/ui/input'
import { Sidebar } from '@/shared/ui/sidebar'

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const SidebarFilter: FC<SidebarFilterProps> = ({ isOpen, setIsOpen }) => {
  const [sort, setSort] = useState('date')
  const [categories, setCategories] = useState<string[]>([])

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    setCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((c) => c !== category)
    )
  }

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl leading-none text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-5 py-4">
        <FilterGroup title="Сортировать по">
          <Radio
            value="date"
            label="По дате"
            checked={sort === 'date'}
            onChange={(value) => setSort(value)}
          />
          <Radio
            value="popularity"
            label="По популярности"
            checked={sort === 'popularity'}
            onChange={(value) => setSort(value)}
          />
        </FilterGroup>

        <FilterGroup title="Категории">
          <Checkbox
            label="Маркетинг"
            value="Маркетинг"
            checked={categories.includes('Маркетинг')}
            onChange={(e) => handleCategoryChange(e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Разработка"
            value="Разработка"
            checked={categories.includes('Разработка')}
            onChange={(e) => handleCategoryChange(e.target.value, e.target.checked)}
          />
          <Checkbox
            label="Дизайн"
            value="Дизайн"
            checked={categories.includes('Дизайн')}
            onChange={(e) => handleCategoryChange(e.target.value, e.target.checked)}
          />
        </FilterGroup>
      </div>

      <div className="border-t border-gray-200 p-4">
        <Button onClick={() => setIsOpen(false)}>Применить фильтры</Button>
      </div>
    </Sidebar>
  )
}
