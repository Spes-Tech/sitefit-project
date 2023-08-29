import Image from 'next/image'

function Post() {
  const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg'
  return (
    <div className="h-max w-60 flex-shrink-0 rounded-lg bg-secondary p-12 md:h-[28rem] md:w-80 lg:w-[26.5rem]">
      <div className="h-full">
        <Image
          src={bogliasco}
          alt="example image"
          width={400}
          height={200}
          className="max-h-48 rounded-lg"
        />
        <p className="pt-8 text-xl font-semibold">
          orci eget efficitur volutpat, ante sem eleifend elit, auctor finibus
          diam sapien maximus orci. Sed at dapibus dolor.
        </p>
      </div>
    </div>
  )
}

export default Post
