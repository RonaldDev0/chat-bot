// Components
import { ToggleTheme, ClearChat } from '@/components'

export default function SideBarr ({ setMessages }: { setMessages: Function }) {
  return (
    <div className='w-72 dark:bg-gray-900 bg-gray-400 max-[600px]:hidden'>
      <ToggleTheme />
      <ClearChat setMessages={setMessages} />
    </div>
  )
}
