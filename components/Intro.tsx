import Image from 'next/image'
import profile from '../public/profile-2.png'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Natnael</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Front-End Developer based in Addis Ababa, Ethiopia.
          dedicated to crafting intuitive and user-focused digital experiences.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={profile}
          alt='Hamed Bahram'
          width={205}
          height={205}
          priority
        />
      </div>
    </section>
  )
}

export default Intro
