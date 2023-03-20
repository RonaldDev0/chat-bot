import { ReactNode } from 'react'

// Components
import { SideBarr } from '@/components'

// Tailwind
import 'tailwindcss/tailwind.css'

export const metadata = { title: 'Chat Gpt | By @ronald_dev' }

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en-us'>
      <body className='text-xl flex h-screen'>
        <SideBarr />
        {children}
      </body>
    </html>
  )
}
