import Image from 'next/image'
import profile from '../public/profile-2.png'
import { Badge } from './ui/badge'
import RotatingText from './RotatingText'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-6 gap-y-6 py-12 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <Badge
          variant='secondary'
          className='mb-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400/20 via-green-500/20 to-emerald-400/20 px-4 py-1.5 text-sm font-medium shadow-sm transition-shadow hover:shadow-md'
        >
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75'></span>
            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
          </span>
          Available for Freelance
        </Badge>

        <h1 className='title no-underline'>
          Hey, I&apos;m{' '}
          <span className='bg-gradient-to-r from-[#ab8a51] via-[#d6ae77] to-[#A68A64] bg-clip-text font-bold text-transparent'>
            Natnael
          </span>
        </h1>

        <p className='mt-3 w-3/4 font-light text-muted-foreground'>
          I&apos;m a Front-End Developer based in Addis Ababa, Ethiopia, working
          with modern web technologies to build responsive, efficient, and
          maintainable applications.
        </p>

        <div className='mt-8 md:mt-12'>
          <RotatingText />
        </div>
      </div>

      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={profile}
          alt='Profile pic'
          width={210}
          height={210}
          priority
        />
      </div>
    </section>
  )
}

export default Intro
