'use client'
import { useState, useEffect } from 'react'

// Interface
interface Theme {
  icon: string
  value: string
}

export default function ToggleTheme () {
  const [theme, setTheme] = useState<Theme>({ icon: '🌕', value: 'Dark mode' })

  const handleTheme = () => {
    if (theme.value === 'Dark mode') return setTheme({ icon: '☀️', value: 'Ligth mode' })
    setTheme({ icon: '🌕', value: 'Dark mode' })
  }

  useEffect(() => {
    if (theme.value === 'Dark mode') {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className='w-full flex justify-center items-center h-20'>
      <button onClick={handleTheme} className='p-2 rounded-lg dark:hover:bg-gray-600 dark:bg-gray-700 transition-all hover:bg-gray-500 bg-gray-300'>{theme.icon + theme.value}</button>
    </div>
  )
}
