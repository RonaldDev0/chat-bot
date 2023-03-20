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
    <div className='fixed bottom-0 w-[87%] flex items-center justify-center bg-gray-500'>
      <form onSubmit={handleSubmit} className='border rounded-md p-2 w-1/2 flex bg-gray-500 mb-4 mt-1'>
        <input type='text' value={text} onChange={handleInput} placeholder='Write your question here!!' className='w-full outline-none px-2 bg-gray-500' />
        <button>Send</button>
      </form>
    </div>
  )
}
