import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuth: boolean
  accessToken: string | null
  actions: {
    login: () => void
    logout: () => void
    setAccessToken: (token: string) => void
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      accessToken: null,
      actions: {
        login: () => set({ isAuth: true }),
        logout: () => set({ isAuth: false }),
        setAccessToken: (token) => set({ accessToken: token }),
      },
    }),
    {
      name: 'auth-store',

      partialize: ({ isAuth, accessToken }) => ({
        isAuth,
        accessToken,
      }),
    },
  ),
)
