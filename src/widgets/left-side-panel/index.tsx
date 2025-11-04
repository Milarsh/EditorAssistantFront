import { useState } from 'react'
import { Tabs } from '@/shared/ui/tabs'
import { TextareaField } from '@/shared/ui/input/text-area'
import { TextField } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'

const tabs = [
  {
    id: 'projects',
    label: 'Проекты',
    items: ['Redesign сайта', 'Мобильное приложение', 'CRM система'],
  },
  {
    id: 'tasks',
    label: 'Задачи',
    items: ['Исправить баги', 'Добавить фильтр', 'Тестирование API'],
  },
  {
    id: 'notes',
    label: 'Заметки',
    items: ['Созвон в пятницу', 'Демо для клиента', 'Проверить аналитику'],
  },
]

export const LeftSidePanel = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setForm({ name: '', email: '', message: '' })
  }

  const active = tabs.find((t) => t.id === activeTab)

  return (
    <div
      className="flex h-screen min-w-90 flex-col justify-between border-r
        border-slate-300 bg-slate-100 p-4"
    >
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-700">Панель</h2>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <ul className="space-y-2">
          {active?.items.map((item) => (
            <li
              key={item}
              className="bg-transparent px-3 py-2 text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 border-t border-slate-300 pt-4">
        <TextField
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <TextareaField
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  )
}
