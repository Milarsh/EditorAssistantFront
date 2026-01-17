import { useMatchRoute, useRouter } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { type FC, useEffect, useRef, useState } from 'react'

import { cn } from '@/shared/lib'

import { menuLinks } from '../config'

export const HeaderMenu: FC = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { navigate } = useRouter()
  const matchRoutes = useMatchRoute()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)}>
        <Menu />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute top-10 left-0 z-50 w-44 overflow-hidden rounded-lg
            border bg-white shadow-md"
        >
          {menuLinks.map(({ to, label }) => {
            const isActive = matchRoutes({ to, fuzzy: true })

            return (
              <button
                type="button"
                key={to}
                onClick={() => {
                  navigate({ to })
                  setOpen(false)
                }}
                className={cn(
                  'w-full px-4 py-2 text-left transition hover:bg-gray-100',
                  { 'bg-gray-100': isActive },
                )}
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
