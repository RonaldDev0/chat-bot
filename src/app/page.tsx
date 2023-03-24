// Components
import { ChatHistory, TextForm } from '@/components'

// Libs
import { openai } from '@/lib'

export default function Home () {
  openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'hi how are you' }]
  }).then(res => console.log(res.data.choices[0].message?.content))

  return (
    <div className='w-full h-screen flex justify-center overflow-auto'>
      <div className='w-5/12 container flex flex-col gap-5 h-screen'>
        <ChatHistory />
        <TextForm />
      </div>
    </div>
  )
}
