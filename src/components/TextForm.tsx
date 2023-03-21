'use client'
import { useState } from 'react'

export default function TextForm () {
  const [text, setText] = useState<string>('')

  const handleInput = ({ target: { value } }: { target: { value: string } }) => {
    setText(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(text)
    setText('')
  }

  return (
    <div className='fixed bottom-0 bg-gray-700 w-[690px] h-[65px]'>
      <form onSubmit={handleSubmit} className='border rounded-md p-2 w-[690px] flex bg-gray-500 mb-4 mt-1 fixed bottom-0 shadow-2xl'>
        <input type='text' value={text} onChange={handleInput} placeholder='Write your question here!!' className='w-full outline-none px-2 bg-gray-500' />
        <button>Send</button>
      </form>
    </div>
  )
}
