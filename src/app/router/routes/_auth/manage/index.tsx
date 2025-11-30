import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/manage/')({
  beforeLoad: () => {
    throw redirect({ to: '/manage/key-words' })
  },
})
