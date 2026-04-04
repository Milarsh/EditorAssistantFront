import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(ref.current)

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect()
  }, [callback, options])

  return ref
}
