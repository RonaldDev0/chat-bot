import { ReactNode } from 'react'

// Components
import { SideBarr } from '@/components'

// Tailwind
import 'tailwindcss/tailwind.css'

export const metadata = { title: 'Chat Gpt | By @ronald_dev' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='text-xl flex h-screen text-gray-300'>
        <SideBarr />
        {children}
      </body>
    </html>
  )
}
