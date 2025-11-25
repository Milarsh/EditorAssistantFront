import { createFileRoute } from '@tanstack/react-router'

import { MainPage } from '@/pages'

export const Route = createFileRoute('/')({
  beforeLoad: (data) => {
    console.log(data, 'data')
  },
  component: MainPage,
})
