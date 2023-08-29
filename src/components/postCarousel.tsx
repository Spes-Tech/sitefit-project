import Post from './post'

function PostsCarousel() {
  return (
    <section>
      <h1 className="pb-11 text-center text-3xl font-semibold">Nam lacinia,</h1>
      <div className="h-max w-full overflow-x-scroll pb-8">
        <div className="flex gap-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  )
}

export default PostsCarousel
