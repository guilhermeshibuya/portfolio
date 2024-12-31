import { useEffect, useRef } from 'react'

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = scrollRef.current
    if (element) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()

        element.scrollBy({
          top: 0,
          left: e.deltaY > 0 ? 30 : -30,
          behavior: 'smooth',
        })
      }
      element.addEventListener('wheel', onWheel)
      return () => element.removeEventListener('wheel', onWheel)
    }
  }, [])
  return scrollRef
}
