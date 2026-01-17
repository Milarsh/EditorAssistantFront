import { useMatchRoute, useRouter } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { type FC, useRef, useState } from 'react'

import { cn } from '@/shared/lib'

import { menuLinks } from '../../config'
import { useClickOutside } from './lib/use-click-outside'

type MenuItemProps = {
  to: string
  label: string
  onClick: () => void
}

const MenuItem: FC<MenuItemProps> = ({ to, label, onClick }) => {
  const matchRoutes = useMatchRoute()
  const isActive = matchRoutes({ to, fuzzy: true })

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('w-full px-4 py-2 text-left transition hover:bg-gray-100', {
        'bg-gray-100': isActive,
      })}
    >
      {label}
    </button>
  )
}

export const HeaderMenu: FC = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const { navigate } = useRouter()

  useClickOutside<HTMLDivElement>(menuRef, () => setOpen(false))

  return (
    <div className="flex-center relative">
      <button type="button" onClick={() => setOpen((o) => !o)}>
        <Menu />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute top-10 left-0 z-50 w-44 overflow-hidden rounded-lg
            border bg-white shadow-md"
        >
          {menuLinks.map(({ to, label }) => (
            <MenuItem
              key={to}
              to={to}
              label={label}
              onClick={() => {
                navigate({ to })
                setOpen(false)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
