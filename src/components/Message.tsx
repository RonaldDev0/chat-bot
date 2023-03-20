interface props {
  from: string
  message: string
}

export default function Message ({ from, message }: props) {
  const bg = from === 'user' ? 'bg-gray-200' : 'bg-slate-400'

  return (
    <div className={bg}>
      <h1>{message}</h1>
    </div>
  )
}
