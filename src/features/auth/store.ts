import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuth: boolean
  actions: {
    login: () => void
    logout: () => void
  }
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      actions: {
        login: () => set({ isAuth: true }),
        logout: () => set({ isAuth: false }),
      },
    }),
    {
      name: 'auth-store',

      partialize: (state) => ({
        isAuth: state.isAuth,
      }),
    },
  ),
)
