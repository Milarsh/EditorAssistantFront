import { RefreshCw } from 'lucide-react'

import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

export const Header = () => {
  const handleReloadPage = () => {
    window.location.reload()
  }

  return (
    <div className="px-4 flex h-15 items-center justify-between">
      <Typography variant="h2">News Aggregator</Typography>
      <Button onClick={handleReloadPage}>
        Обновить
        <RefreshCw className="ml-2 inline-block" />
      </Button>
    </div>
  )
}
