import { Link, Outlet, useMatchRoute } from '@tanstack/react-router'

// eslint-disable-next-line import/extensions
import type { FileRoutesByTo } from '@/app/router/routeTree.gen'
import { cn } from '@/shared/lib/cn'
import { Header } from '@/shared/ui/header'
import { Typography } from '@/shared/ui/typography'

const settingsLinks: { label: string; to: keyof FileRoutesByTo }[] = [
  { label: 'Очистка новостей', to: '/settings/news-clear' },
  {
    label: 'Периодичность опроса источников',
    to: '/settings/poll-inteval',
  },
  { label: 'Настройка медиафайлов', to: '/settings/mediafiles' },
  {
    label: 'Периодичность сбора статистики по новостям',
    to: '/settings/social-statistic-interval',
  },
]

export const SettingsLayout = () => {
  const matchRoute = useMatchRoute()

  return (
    <div className="vertical h-screen">
      <Header />
      <div className="flex h-screen">
        <aside className="w-64 border-r bg-white p-4">
          <Typography variant="h2" className="mb-4">
            Настройки
          </Typography>

          <nav className="vertical gap-1 text-neutral-500">
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
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
