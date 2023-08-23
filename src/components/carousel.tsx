'use client'
import HeroSlider, { Slide, MenuNav } from 'hero-slider'

const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg'
const countyClare = 'https://i.imgur.com/idjXzVQ.jpg'
const craterRock = 'https://i.imgur.com/8DYumaY.jpg'
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg'

function Carousel() {
  return (
    <div className="h-full overflow-hidden rounded-2xl">
      <HeroSlider
        className="h-32 md:h-80 lg:h-96"
        accessibility={{ shouldDisplayButtons: false }}
        animations={{ slidingAnimation: 'wipe' }}
        height={'100%'}
        autoplay={{ autoplayDuration: 4000 }}
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
        }}
      >
        <Slide
          label="Giau Pass - Italy"
          background={{
            backgroundImageSrc: giauPass,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: bogliasco,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: countyClare,
            backgroundAnimation: 'zoom',
          }}
        />

        <Slide
          // shouldRenderMask
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: craterRock,
            backgroundAnimation: 'zoom',
          }}
        />
        <MenuNav />
      </HeroSlider>
    </div>
  )
}

export default Carousel
