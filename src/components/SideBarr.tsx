// Components
import { ToggleTheme, ClearChat } from '@/components'

export default function SideBarr () {
  return (
    <div className='w-72 dark:bg-gray-900 bg-gray-400'>
      <ToggleTheme />
      <ClearChat />
    </div>
  )
}
