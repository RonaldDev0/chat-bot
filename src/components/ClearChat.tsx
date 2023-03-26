export default function ClearChat ({ setMessages }: { setMessages: Function }) {
  return (
    <div className='w-full flex items-center justify-center'>
      <button onClick={() => setMessages([])} className='p-2 rounded-lg dark:hover:bg-gray-600 dark:bg-gray-700 transition-all hover:bg-gray-500 bg-gray-300'>🗑️Clear Chat</button>
    </div>
  )
}
