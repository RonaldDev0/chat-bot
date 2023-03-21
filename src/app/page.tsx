// Components
import { ChatHistory, TextForm } from '@/components'

export default function Home () {
  return (
    <div className='w-full h-screen bg-gray-700 flex justify-center overflow-auto'>
      <div className='w-5/12 container flex flex-col gap-5 h-screen'>
        <ChatHistory />
        <TextForm />
      </div>
    </div>
  )
}
