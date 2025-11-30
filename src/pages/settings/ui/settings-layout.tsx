import { Link, Outlet, useMatchRoute } from '@tanstack/react-router'

// eslint-disable-next-line import/extensions
import type { FileRoutesByTo } from '@/app/router/routeTree.gen'
import { cn } from '@/shared/lib/cn'
import { Header } from '@/shared/ui/header'

const settingsLinks: { label: string; to: keyof FileRoutesByTo }[] = [
  { label: 'Очистка новостей', to: '/settings/news-clear' },
  {
    label: 'Периодичность опроса источников',
    to: '/settings/survey-frequency',
  },
  { label: 'Настройка медиафайлов', to: '/settings/mediafiles' },
]

export const SettingsLayout = () => {
  const matchRoute = useMatchRoute()

  return (
    <main className="vertical h-screen">
      <Header title="News agregator" />
      <div className="flex h-screen">
        <aside className="w-64 border-r bg-white p-4">
          <h2 className="mb-4 text-lg font-semibold">Настройки</h2>

          <nav className="flex flex-col gap-1">
            {settingsLinks.map(({ label, to }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    'rounded-md px-3 py-2 transition',
                    matchRoute({ to }) ? 'bg-gray-100' : 'hover:bg-gray-50',
                  )}
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </main>
  )
}
