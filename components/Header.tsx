import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa'
import { DownloadIcon } from '@radix-ui/react-icons'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/90 py-6 backdrop-blur'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-xl font-bold'>
            <span>Dev🔸</span>
            <p className='text-[.6rem] leading-[.9rem]'>Natnael Demelash</p>
          </Link>
        </div>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
        </ul>
        <Button
          className='flex items-center gap-3'
          size={'sm'}
          variant={'link'}
        >
          <span>Resume</span>
          <DownloadIcon />
        </Button>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
