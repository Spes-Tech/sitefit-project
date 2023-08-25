import Carousel from '@/components/carousel'
import Modal from '@/components/modal'
import PostsCarousel from '@/components/postCarousel'
import Space from '@/components/space'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 lg:px-8">
      <Space />
      <Carousel />
      <Space />
      <PostsCarousel />
      <Space />
      <Modal className="text-center">
        <button
          type="button"
          className="rounded bg-gray-400 px-5 py-2 font-semibold transition-all hover:opacity-80"
        >
          Open Modal
        </button>
      </Modal>
    </main>
  )
}
