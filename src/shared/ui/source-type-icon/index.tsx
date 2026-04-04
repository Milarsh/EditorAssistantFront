import {
  Cloud,
  type LucideIcon,
  type LucideProps,
  Rss,
  Send,
} from 'lucide-react'

const SOURCE_TYPE_ICONS: Record<string, LucideIcon> = {
  vk: Cloud,
  tg: Send,
}

export const SourceTypeIcon = ({
  type,
  ...props
}: { type: string } & LucideProps) => {
  const Icon = SOURCE_TYPE_ICONS[type] ?? Rss

  return <Icon {...props} />
}
