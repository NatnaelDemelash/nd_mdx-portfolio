import Image from 'next/image'
import profile from '../public/profile-2.png'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>
          Hey, I&#39;m <span className='text-green-600'>Natnael</span>
        </h1>
        <p className='mt-3 w-3/4 font-light text-muted-foreground'>
          I&#39;m a Front-End Developer based in Addis Ababa, Ethiopia, working
          with modern web technologies to build responsive, efficient, and
          maintainable applications.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={profile}
          alt='Profile pic'
          width={205}
          height={205}
          priority
        />
      </div>
    </section>
  )
}

export default Intro
