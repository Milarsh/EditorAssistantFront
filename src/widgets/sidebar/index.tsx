import { cn } from '@/shared/lib'

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const SidebarFilter = ({ isOpen, setIsOpen }: SidebarFilterProps) => {

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity z-40',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[320px] bg-white shadow-lg transition-transform duration-300 ease-in-out border-l border-gray-200 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          {/* Filter Group 1: Радиокнопки */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Сортировать по
            </h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="sort"
                  value="date"
                  className="accent-black"
                  defaultChecked
                />
                По дате
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="radio"
                  name="sort"
                  value="popularity"
                  className="accent-black"
                />
                По популярности
              </label>
            </div>
          </div>

          {/* Filter Group 2: Чекбоксы */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Категории
            </h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-black" /> Маркетинг
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-black" /> Разработка
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-black" /> Дизайн
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-md bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Применить фильтры
          </button>
        </div>
      </aside>
    </>
  )
}
