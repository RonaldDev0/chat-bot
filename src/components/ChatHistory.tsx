// Components
import { Message } from '@/components'

// Interfaces
interface props {
  messages: object[]
}

export default function ChatHistory ({ messages }: props) {
  return (
    <>
      {messages.map(({ from, message }: any) => <Message key={message} from={from} message={message} />)}
    </>
  )
}
