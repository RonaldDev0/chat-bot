import Image from 'next/image'

// Interface
interface props {
  from: string
  message: string
}

export default function Message ({ from, message }: props) {
  const bg = from === 'user' ? 'bg-transparent' : 'dark:bg-gray-600 bg-gray-400 rounded-lg'
  const icon = from === 'user' ? './user.svg' : './chatgpt-icon.svg'

  return (
    <>
      {
        message &&
          <div className={`${bg} flex items-start p-2 gap-2`}>
            <Image width='45' height='45' src={icon} alt='icon' />
            <h1>{message}</h1>
          </div>
      }
    </>
  )
}
