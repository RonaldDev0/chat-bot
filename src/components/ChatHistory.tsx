// Fake Database
import { messages, message } from '@/db'

// Components
import { Message } from '@/components'

export default function ChatHistory () {
  return (
    <div className='px-96'>
      {messages?.map(({ id, from, message }: message) => <Message key={id} from={from} message={message} />)}
    </div>
  )
}
