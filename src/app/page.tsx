'use client'
import { useState, useEffect } from 'react'

// Components
import { SideBarr, ChatHistory, TextForm } from '@/components'

// Libs
import { openai } from '@/lib'

export default function Home () {
  const [response, setResponse] = useState<any>('')
  const [input, setInput] = useState<string | null>(null)
  const [messages, setMessages] = useState<object[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    async function seter () {
      input && await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }]
      }).then(({ data: { choices } }) => {
        setResponse(choices[0].message?.content)
        setLoading(false)
      })
    }seter()
  }, [input])

  useEffect(() => {
    setMessages([...messages, { from: 'user', message: input }])
  }, [input])

  useEffect(() => {
    setMessages([...messages, { from: 'machine', message: response }])
  }, [response])

  return (
    <>
      <SideBarr setMessages={setMessages} />
      <div className='w-full h-screen flex justify-center overflow-auto'>
        <div className='w-5/12 max-[600px]:w-full max-[600px]:m- container'>
          <ChatHistory messages={messages} />
          <TextForm setInput={setInput} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </>
  )
}
