import Button from '@/components/button'
import Carousel from '@/components/carousel'
import Modal from '@/components/modal'
import PostsCarousel from '@/components/postCarousel'
import Section from '@/components/Section'
import Space from '@/components/space'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 lg:px-8">
      <Space />
      <Carousel />
      <Section />
      <Space />
      <PostsCarousel />
      <Space />
      <Modal className="relative text-center">
        <Button>Open modal</Button>
      </Modal>
      <Space />
    </main>
  )
}
