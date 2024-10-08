import React from 'react'
import { Button } from './ui/button'
import { FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col items-center pb-6 md:mt-32'>
      <h1 className='max-w-3xl text-center text-2xl md:text-4xl'>
        Ready to take Your
        <span className='text-green-500'> Digital presence</span> to the next
        level?
      </h1>
      <p className='text-white-200 text- my-5 px-6 text-center leading-6 md:mt-10'>
        Feel free to get in touch, and let&apos;s chat about how can I support
        you in reaching your goals.
      </p>

      <a href='mailto:natnael.dev101@gmail.com'>
        <Button className='flex items-center gap-3'>
          <span>Let&apos;s get in touch</span>
          <FaLocationArrow />
        </Button>
      </a>
    </div>
  )
}

export default Contact
