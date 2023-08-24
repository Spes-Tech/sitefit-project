function PostsCarousel() {
  return (
    <section>
      <h1 className="pb-11 text-center text-3xl font-semibold">Nam lacinia,</h1>
      <div className="h-max w-full overflow-x-scroll pb-8">
        <div className="flex gap-8">
          <div className="h-[28rem] w-60 flex-shrink-0 rounded-lg bg-gray-400 md:w-80 lg:w-[26.5rem]"></div>
          <div className="h-[28rem] w-60 flex-shrink-0 rounded-lg bg-gray-400 md:w-80 lg:w-[26.5rem]"></div>
          <div className="h-[28rem] w-60 flex-shrink-0 rounded-lg bg-gray-400 md:w-80 lg:w-[26.5rem]"></div>
          <div className="h-[28rem] w-60 flex-shrink-0 rounded-lg bg-gray-400 md:w-80 lg:w-[26.5rem]"></div>
        </div>
      </div>
    </section>
  )
}

export default PostsCarousel
