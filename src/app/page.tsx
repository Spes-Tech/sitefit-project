import Carousel from '@/components/carousel'
import PostsCarousel from '@/components/postCarousel'
import Space from '@/components/space'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 lg:px-8">
      <Space />
      <Carousel />
      <Space />
      <PostsCarousel />
    </main>
  )
}
