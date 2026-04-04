import type { FC, PropsWithChildren } from 'react'

interface SettingsCardProps extends PropsWithChildren {
  title?: string
}

export const SettingsCardWrapper: FC<SettingsCardProps> = ({
  children,
  title,
}) => {
  return (
    <div
      className="flex min-h-full items-start justify-center bg-[#F5F6FA] pt-10"
    >
      <div className="w-200 rounded-xl bg-white p-4 shadow-md">
        <h2 className="mb-6 text-lg font-semibold text-gray-800">{title}</h2>
        {children}
      </div>
    </div>
  )
}
