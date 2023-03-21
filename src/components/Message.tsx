import Image from 'next/image'

interface props {
  from: string
  message: string
}

export default function Message ({ from, message }: props) {
  const bg = from === 'user' ? 'bg-transparent' : 'bg-gray-500'
  const icon = from === 'user' ? './user.svg' : './chatgpt-icon.svg'

  return (
    <div className={`${bg} flex items-start p-2 gap-2`}>
      <Image width='45' height='45' src={icon} alt='icon' />
      <h1>{message}</h1>
    </div>
  )
}
