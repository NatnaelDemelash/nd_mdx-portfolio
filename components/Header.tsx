import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa'
import { DownloadIcon } from '@radix-ui/react-icons'
import { CommandMenu } from './command-menu'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/90 py-6 backdrop-blur'>
      <nav className='lg:max-w-8xl container flex max-w-4xl items-center justify-between px-4 xl:max-w-6xl'>
        <div>
          <Link href='/' className='font-serif text-xl font-bold'>
            <span>Dev🔸</span>
            <p className='text-[.6rem] leading-[.9rem]'>Natnael Demelash</p>
          </Link>
        </div>
        <ul className='hidden items-center gap-6 text-sm font-light text-muted-foreground md:flex'>
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
          asChild
        >
          <Link href='/resume'>
            <span>Resume</span>
            <DownloadIcon />
          </Link>
        </Button>
        <CommandMenu />
        <div className='hiden lg:block'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
