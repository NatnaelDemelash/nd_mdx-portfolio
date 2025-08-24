'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'
import {
  SunIcon,
  MoonStarIcon,
  RssIcon,
  LayersIcon,
  BriefcaseBusinessIcon,
  SearchCheckIcon,
  Search,
  HomeIcon,
  QrCode
} from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { SiCodesandbox } from 'react-icons/si'
import { CodeSandboxLogoIcon } from '@radix-ui/react-icons'

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()
  const router = useRouter()

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <>
      {/* Trigger button for header */}
      <Button
        variant='ghost'
        className='flex h-8 items-center gap-2 rounded-full border border-muted-foreground px-3'
        onClick={() => setOpen(true)}
      >
        <span className='text-lg'>
          <Search className='h-4 w-4' />
        </span>

        <kbd className='rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-muted-foreground'>
          Ctrl K
        </kbd>
      </Button>

      {/* Command dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search sections or commands...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Navigation */}
          <CommandGroup heading='Navigation'>
            <CommandItem onSelect={() => handleSelect('/')}>
              <QrCode className='mr-2 h-4 w-4' />
              NatiDev
            </CommandItem>
            <CommandItem onSelect={() => handleSelect('/posts')}>
              <RssIcon className='mr-2 h-4 w-4' />
              Posts
            </CommandItem>
            <CommandItem onSelect={() => handleSelect('/#skills')}>
              <LayersIcon className='mr-2 h-4 w-4' />
              Tech Stacks
            </CommandItem>
            <CommandItem onSelect={() => handleSelect('/projects')}>
              <BriefcaseBusinessIcon className='mr-2 h-4 w-4' />
              Projects
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* Theme */}
          {/* Theme */}
          <CommandGroup heading='Theme'>
            <CommandItem
              onSelect={() => {
                setTheme('light')
                toast.success('Switched to Light theme')
                setOpen(false)
              }}
            >
              <SunIcon className='mr-2 h-4 w-4' />
              Light
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme('dark')
                toast.success('Switched to Dark theme')
                setOpen(false)
              }}
            >
              <MoonStarIcon className='mr-2 h-4 w-4' />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
