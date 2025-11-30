import { Button } from '@/shared/ui/button'
import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

const WordsStatistic = ({ categories }: any) => {
  return (
    <div
      className="h-fit w-[250px] rounded-lg border border-gray-200 bg-white p-6"
    >
      <h3 className="mb-4 font-semibold text-gray-800">Статистика</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        <li>
          Категорий стоп-слов:{' '}
          <span className="font-medium">{categories.length}</span>
        </li>
        <li>
          Всего стоп-слов: <span className="font-medium">156</span>
        </li>
        <li>
          Пользовательских: <span className="font-medium">23</span>
        </li>
      </ul>
    </div>
  )
}

const AddCategoryForm = ({ newCategory, handleAdd, setNewCategory }: any) => {
  return (
    <div className="vertical gap-4">
      <Typography variant="body">Добавление категорий</Typography>
      <TextField
        type="text"
        placeholder="Введите название категории"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button size="xs" onClick={handleAdd}>
        Добавить
      </Button>
    </div>
  )
}

export const ManagerWrapper = ({
  categories,
  newCategory,
  setNewCategory,
  handleAdd,
  children,
  topSlot,
}: any) => {
  return (
    <div className="vertical h-screen">
      {topSlot}
      <div className="flex h-screen">
        <div className="vertical gap-20 px-4">
          <WordsStatistic categories={categories} />
          <AddCategoryForm
            handleAdd={handleAdd}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
          />
        </div>

        {children}
      </div>
    </div>
  )
}
