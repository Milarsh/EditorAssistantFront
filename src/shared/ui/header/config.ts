// eslint-disable-next-line import/extensions
import type { FileRoutesByTo } from '@/app/router/routeTree.gen.ts'

interface MenuLink {
  label: string
  to: keyof FileRoutesByTo
}

export const menuLinks: MenuLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Настройки', to: '/settings' },
  { label: 'Ключевые слова', to: '/manage/key-words' },
  { label: 'Стоп-слова', to: '/manage/stop-words' },
  { label: 'Управление источниками', to: '/manage/sources' },
]

export const DEFAULT_TITLE = 'News Agregator'
