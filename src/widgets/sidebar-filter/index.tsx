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

// import { type FC, useState } from 'react'
//
// import { Button } from '@/shared/ui/button';
// import { FilterGroup } from '@/shared/ui/filter-group'
// import { Checkbox, Radio } from '@/shared/ui/input'
// import { Sidebar } from '@/shared/ui/sidebar'
//
// interface SidebarFilterProps {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }
//
// export const SidebarFilter: FC<SidebarFilterProps> = ({ isOpen, setIsOpen }) => {
//   const [sort, setSort] = useState('date');
//   const [categories, setCategories] = useState<string[]>([]);
//
//   const handleCategoryChange = (category: string, isChecked: boolean) => {
//     setCategories((prev) =>
//       isChecked ? [...prev, category] : prev.filter((c) => c !== category)
//     );
//   };
//
//   return (
//     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
//       <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
//         <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
//         <button
//           onClick={() => setIsOpen(false)}
//           className="text-xl leading-none text-gray-500 hover:text-gray-700"
//         >
//           ×
//         </button>
//       </div>
//
//       <div className="flex-1 space-y-6 overflow-y-auto px-5 py-4">
//         {/* Группа сортировки */}
//         <FilterGroup title="Сортировать по">
//           <Radio
//             value="date"
//             label="По дате"
//             checked={sort === 'date'}
//             onChange={setSort}
//           />
//           <Radio
//             value="popularity"
//             label="По популярности"
//             checked={sort === 'popularity'}
//             onChange={setSort}
//           />
//         </FilterGroup>
//
//         {/* Группа категорий */}
//         <FilterGroup title="Категории">
//           <Checkbox
//
//             label="Маркетинг"
//             checked={categories.includes('Маркетинг')}
//             onChange={(e) =>
//               handleCategoryChange('Маркетинг', e.target.checked)
//             }
//           />
//           <Checkbox
//             label="Разработка"
//             checked={categories.includes('Разработка')}
//             onChange={(e) =>
//               handleCategoryChange('Разработка', e.target.checked)
//             }
//           />
//           <Checkbox
//             label="Дизайн"
//             checked={categories.includes('Дизайн')}
//             onChange={(e) =>
//               handleCategoryChange('Дизайн', e.target.checked)
//             }
//           />
//         </FilterGroup>
//       </div>
//
//       {/* футер с кнопкой */}
//       <div className="border-t border-gray-200 p-4">
//         <Button onClick={() => setIsOpen(false)}>Применить фильтры</Button>
//       </div>
//     </Sidebar>
//   );
// };
//
//
// // import { cn } from '@/shared/lib'
// //
// // interface SidebarFilterProps {
// //   isOpen: boolean
// //   setIsOpen: (open: boolean) => void
// // }
// //
// // export const SidebarFilter = ({ isOpen, setIsOpen }: SidebarFilterProps) => {
// //   return (
// //     <>
// //       <div
// //         onClick={() => setIsOpen(false)}
// //         className={cn(
// //           `visible fixed inset-0 z-40 bg-black/40 opacity-100 backdrop-blur-sm
// //           transition-opacity`,
// //           { 'invisible opacity-0': !isOpen },
// //         )}
// //       />
// //
// //       <aside
// //         className={cn(
// //           `fixed top-0 right-0 z-50 flex h-full w-[320px] flex-col border-l
// //           border-gray-200 bg-white shadow-lg transition-transform duration-300
// //           ease-in-out translate-x-full`,
// //           {'translate-x-0': isOpen}
// //         )}
// //       >
// //         <div
// //           className="flex items-center justify-between border-b border-gray-200
// //             px-5 py-4"
// //         >
// //           <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
// //           <button
// //             onClick={() => setIsOpen(false)}
// //             className="text-xl leading-none text-gray-500 hover:text-gray-700"
// //           >
// //             ×
// //           </button>
// //         </div>
// //
// //         {/* Content */}
// //         <div className="flex-1 space-y-6 overflow-y-auto px-5 py-4">
// //           {/* Filter Group 1: Радиокнопки */}
// //           <div>
// //             <h3 className="mb-2 text-sm font-medium text-gray-700">
// //               Сортировать по
// //             </h3>
// //             <div className="flex flex-col gap-2">
// //               <label className="flex items-center gap-2 text-sm text-gray-600">
// //                 <input
// //                   type="radio"
// //                   name="sort"
// //                   value="date"
// //                   className="accent-black"
// //                   defaultChecked
// //                 />
// //                 По дате
// //               </label>
// //               <label className="flex items-center gap-2 text-sm text-gray-600">
// //                 <input
// //                   type="radio"
// //                   name="sort"
// //                   value="popularity"
// //                   className="accent-black"
// //                 />
// //                 По популярности
// //               </label>
// //             </div>
// //           </div>
// //
// //           {/* Filter Group 2: Чекбоксы */}
// //           <div>
// //             <h3 className="mb-2 text-sm font-medium text-gray-700">
// //               Категории
// //             </h3>
// //             <div className="flex flex-col gap-2">
// //               <label className="flex items-center gap-2 text-sm text-gray-600">
// //                 <input type="checkbox" className="accent-black" /> Маркетинг
// //               </label>
// //               <label className="flex items-center gap-2 text-sm text-gray-600">
// //                 <input type="checkbox" className="accent-black" /> Разработка
// //               </label>
// //               <label className="flex items-center gap-2 text-sm text-gray-600">
// //                 <input type="checkbox" className="accent-black" /> Дизайн
// //               </label>
// //             </div>
// //           </div>
// //         </div>
// //
// //         {/* Footer */}
// //         <div className="border-t border-gray-200 p-4">
// //           <button
// //             onClick={() => setIsOpen(false)}
// //             className="w-full rounded-md bg-black py-2 text-sm font-medium
// //               text-white transition-colors hover:bg-gray-800"
// //           >
// //             Применить фильтры
// //           </button>
// //         </div>
// //       </aside>
// //     </>
// //   )
// // }
