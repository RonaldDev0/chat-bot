// Fake Database
import { messages, message } from '@/db'

// Components
import { Message } from '@/components'

export default function ChatHistory () {
  return (
    <>
      {messages?.map(({ id, from, message }: message) => <Message key={id} from={from} message={message} />)}
    </>
  )
}
