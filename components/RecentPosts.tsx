import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getPosts } from '@/lib/posts'
import Posts from './Posts'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <section className='pb-24'>
      <div className='mb-12'>
        <h2 className='title mb-12'>Recent Posts</h2>
      </div>

      {posts && posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        <p className='text-center text-muted-foreground'>
          No posts yet — check back soon!
        </p>
      )}

      <div className='mt-10 flex justify-center'>
        <Link
          href='/posts'
          className='inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground'
        >
          <span>View all posts</span>
          <ArrowRight className='h-4 w-4' />
        </Link>
      </div>
    </section>
  )
}
