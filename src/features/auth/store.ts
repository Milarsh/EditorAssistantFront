import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  isAuth: boolean
  actions: {
    login: () => void
    logout: () => void
  }
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuth: false,
      actions: {
        login: () => set({ isAuth: true }),
        logout: () => set({ isAuth: false }),
      },
    }),
    {
      name: 'auth-store', // localStorage key
    },
  ),
)
