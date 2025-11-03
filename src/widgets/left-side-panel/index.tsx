import { useState } from 'react'

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
    console.log('Form submitted:', form)
    setForm({ name: '', email: '', message: '' })
  }

  const active = tabs.find((t) => t.id === activeTab)

  return (
    <div
      className="flex h-screen min-w-90 flex-col justify-between border-r
        border-slate-300 bg-slate-100 p-4"
    >
      {/* === Заголовок === */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-slate-700">Панель</h2>

        {/* === Табы === */}
        <div className="mb-4 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-md px-3 py-1 text-sm font-medium transition ${
              activeTab === tab.id
                  ? 'bg-slate-800 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              } `}
            >
              {tab.label}
            </button>
          ))}
        </div>

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

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 border-t border-slate-300 pt-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          className="rounded-md border border-slate-300 bg-white px-3 py-2
            text-slate-700 focus:ring-2 focus:ring-slate-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-md border border-slate-300 bg-white px-3 py-2
            text-slate-700 focus:ring-2 focus:ring-slate-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
          className="h-20 resize-none rounded-md border border-slate-300
            bg-white px-3 py-2 text-slate-700 focus:ring-2 focus:ring-slate-500
            focus:outline-none"
        />
        <button
          type="submit"
          className="mt-1 rounded-md bg-slate-800 py-2 text-sm font-medium
            text-white transition hover:bg-slate-700"
        >
          Отправить
        </button>
      </form>
    </div>
  )
}
