import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Icon icon={locationIcon} />
      </h1>{' '}
      Wildfire Tracker (Powered by NASA)
    </header>
  )
}

export default Header
