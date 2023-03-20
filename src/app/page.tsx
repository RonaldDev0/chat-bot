// Components
import { ChatHistory, TextForm } from '@/components'

export default function Home () {
  return (
    <div className='w-full h-screen overflow-auto bg-gray-500'>
      <ChatHistory />
      <TextForm />
    </div>
  )
}
