import type { ReactNode } from 'react'

type ListItemProps = {
  left: ReactNode
  right?: ReactNode
}

export const ListItem = ({ left, right }: ListItemProps) => {
  return (
    <div
      className="w-full cursor-pointer border border-[#E2E8F0] bg-white px-6
        py-3"
    >
      <div className="flex w-full items-center justify-between">
        <div>{left}</div>
        {right && <div className="flex items-center gap-6">{right}</div>}
      </div>
    </div>
  )
}
