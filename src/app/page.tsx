'use client'
import { useState, useEffect } from 'react'

// Components
import { ChatHistory, TextForm } from '@/components'

// Libs
import { openai } from '@/lib'

export default function Home () {
  const [response, setResponse] = useState<any>('')

  useEffect(() => {
    async function seter () {
      await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'hi how are you' }]
      }).then(({ data: { choices } }) => setResponse(choices[0].message?.content))
    }seter()
  }, [])

  return (
    <div className='w-full h-screen flex justify-center overflow-auto'>
      <div className='w-5/12 container flex flex-col gap-5 h-screen'>
        {response}
        <ChatHistory />
        <TextForm />
      </div>
    </div>
  )
}
