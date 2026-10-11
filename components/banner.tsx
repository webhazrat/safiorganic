"use client"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Banner() {
  return (
    <div className="layout-p py-5">
      <Carousel plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselContent>
          <CarouselItem>
            <div className="h-150 rounded-2xl bg-[url(/banner1.jpg)] bg-cover bg-center"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-150 rounded-2xl bg-[url(/banner2.jpg)] bg-cover bg-center"></div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
