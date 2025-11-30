import { redirect } from '@tanstack/react-router'

import { useAuthStore } from '../store.ts'

export function authGuard() {
  const { isAuth } = useAuthStore.getState()

  if (!isAuth) {
    throw redirect({
      to: '/login',
      search: {
        redirectTo: window.location.pathname,
      },
    })
  }
}
