import { useEffect, useState } from 'react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { TextField } from '@/shared/ui/input'

export const ArticlesSearch = () => {
  const { setFilters } = useArticlesFeedStore()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({ q: search })
    }, 1000)

    return () => clearTimeout(timer)
  }, [search, setFilters])

  return (
    <TextField
      name="search"
      placeholder="Поиск..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-100"
    />
  )
}
