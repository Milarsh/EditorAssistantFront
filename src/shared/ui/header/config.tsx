import { CircleMinus, Clipboard, House, Key, Settings } from 'lucide-react'
import type { ReactNode } from 'react'

// eslint-disable-next-line import/extensions
import type { FileRoutesByTo } from '@/app/router/routeTree.gen'

interface MenuLink {
  label: string
  to: keyof FileRoutesByTo
  icon: ReactNode
}

export const menuLinks: MenuLink[] = [
  { label: 'Главная', to: '/', icon: <House size={14} /> },
  { label: 'Настройки', to: '/settings', icon: <Settings size={14} /> },
  { label: 'Ключевые слова', to: '/manage/key-words', icon: <Key size={14} /> },
  {
    label: 'Стоп-слова',
    to: '/manage/stop-words',
    icon: <CircleMinus size={14} />,
  },
  {
    label: 'Управление источниками',
    to: '/manage/sources',
    icon: <Clipboard size={18} />,
  },
]

export const DEFAULT_TITLE = 'Агрегатор Новостей'
