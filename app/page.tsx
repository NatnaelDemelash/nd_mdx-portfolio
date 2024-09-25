import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import RecentPosts from '@/components/RecentPosts'
import RecentProjects from '@/components/RecentProjects'
import Skills from '@/components/Skills'
import { Button } from '@/components/ui/button'
import { BookmarkIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </section>
  )
}
