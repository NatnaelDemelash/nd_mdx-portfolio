import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import RecentPosts from '@/components/RecentPosts'
import RecentProjects from '@/components/RecentProjects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className='py-24'>
      <div className='container mx-auto max-w-4xl space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8 xl:max-w-6xl'>
        <Intro />
        <RecentPosts />
        <Skills />
        <RecentProjects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
