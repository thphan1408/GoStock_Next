import { useCallback, useEffect, useState } from 'react'

const browser = typeof window !== 'undefined'

export const useViewPortWidth = () => {
  const [width, setWidth] = useState(browser ? window.innerHeight : 0)

  const setSize = useCallback(() => {
    setWidth(window.innerWidth || 0)
  }, [])

  useEffect(() => {
    // Chỉ chạy đoạn mã này khi component đã được mount (trên client)
    setSize() // Cập nhật width ngay khi component mount
    window.addEventListener('resize', setSize, { passive: true })
    window.addEventListener('orientationchange', setSize, { passive: true })

    // Dọn dẹp event listeners khi component unmount
    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('orientationchange', setSize)
    }
  }, [setSize])
  return width
}
