import { Link, useMatchRoute, useRouter } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { type FC, useEffect, useRef, useState } from 'react'

// eslint-disable-next-line import/extensions
import type { FileRoutesByTo } from '@/app/router/routeTree.gen'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui/typography'

interface MenuLink {
  label: string
  to: keyof FileRoutesByTo
}

const menuLinks: MenuLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Настройки', to: '/settings' },
  { label: 'Ключевые слова', to: '/manage/key-words' },
  { label: 'Стоп-слова', to: '/manage/stop-words' },
  { label: 'Управление источниками', to: '/manage/sources' },
]

interface Props {
  hideUser?: boolean
  title?: string
}

export const Header: FC<Props> = ({ hideUser = false, title }) => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { navigate } = useRouter()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const matchRoutes = useMatchRoute()

  return (
    <div className="relative flex h-15 items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setOpen((o) => !o)}>
          <Menu />
        </button>

        <Typography variant="h2">{title}</Typography>
      </div>

      {!hideUser && (
        <Link to="/personal">
          <Typography variant="body">человек</Typography>
        </Link>
      )}

      {open && (
        <div
          ref={menuRef}
          className="absolute top-14 left-4 z-50 w-44 overflow-hidden rounded-lg
            border bg-white shadow-md"
        >
          {menuLinks.map(({ to, label }) => {
            const onClick = () => navigate({ to })

            return (
              <button
                type="button"
                key={to}
                onClick={onClick}
                className={cn('w-full px-4 py-2 text-left transition', {
                  'bg-gray-100': matchRoutes({ to, fuzzy: true }),
                })}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
