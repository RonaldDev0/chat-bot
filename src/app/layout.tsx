import { ReactNode } from 'react'

// Tailwind
import 'tailwindcss/tailwind.css'

export const metadata = { title: 'Chat Gpt | By @ronald_dev' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='text-xl flex h-screen dark:text-gray-300 text-black dark:bg-gray-700 bg-gray-300'>
        {children}
      </body>
    </html>
  )
}
