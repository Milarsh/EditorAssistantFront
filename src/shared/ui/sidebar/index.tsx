import type { FC, ReactNode } from 'react'
import { cn } from '@/shared/lib'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  children: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          `fixed inset-0 z-40 bg-black/40 opacity-100 backdrop-blur-sm transition-opacity`,
          { 'invisible opacity-0': !isOpen },
        )}
      />
      <aside
        className={cn(
          `fixed top-0 right-0 z-50 flex h-full w-[320px] flex-col border-l
          border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-in-out translate-x-0`,
          { 'translate-x-full': !isOpen }
        )}
      >
        {children}
      </aside>
    </>
  )
}
