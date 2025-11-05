import type {
  ElementType,
  FC,
  PropsWithChildren,
  RefObject,
} from 'react'
import { cn } from '@/shared/lib'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'button-text'
  | 'button-text-small'
  | 'body'
  | 'body-bold'
  | 'footnote'
  | 'footnote-bold'
  | 'caption'

const classNamesMap: Record<Variant, string> = {
  h1: 'text-[2rem]/9.5 font-bold',
  h2: 'text-2xl/7 font-bold',
  h3: 'text-xl/6 font-bold',
  'button-text': 'text-[1.125rem]/5 font-semibold',
  'button-text-small': 'text-sm font-medium',
  body: 'text-base/5.5 font-normal',
  'body-bold': 'text-base/5.5 font-semibold',
  footnote: 'text-sm font-normal',
  'footnote-bold': 'text-sm font-semibold',
  caption: 'text-xs font-normal',
}

const componentsMap: Record<Variant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'button-text': 'span',
  'button-text-small': 'span',
  body: 'p',
  'body-bold': 'p',
  footnote: 'span',
  'footnote-bold': 'span',
  caption: 'span',
}

interface TypographyProps {
  variant?: Variant
  as?: ElementType
  className?: string
  ref?: RefObject<Element | null>
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant = 'body',
  as,
  children,
  className,
  ref,
}) => {
  const Component = as ?? componentsMap[variant]
  const effectiveClassName = cn(classNamesMap[variant], className)

  return (
    <Component ref={ref} className={effectiveClassName}>
      {children}
    </Component>
  )
}
