import { Link } from '@tanstack/react-router'
import { type FC } from 'react'

import { useUserInfo } from '@/entities/user/lib'
import { Typography } from '@/shared/ui/typography'

import { DEFAULT_TITLE } from '../config'
import { HeaderMenu } from './header-menu'

interface Props {
  hideUser?: boolean
  title?: string
}

export const Header: FC<Props> = ({
  hideUser = false,
  title = DEFAULT_TITLE,
}) => {
  const { data: user } = useUserInfo()

  return (
    <div className="relative flex h-15 items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <HeaderMenu />
        <Typography variant="h2">{title}</Typography>
      </div>

      {!hideUser && (
        <Link to="/profile">
          <Typography variant="body">{user?.login}</Typography>
        </Link>
      )}
    </div>
  )
}
