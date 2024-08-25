'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Chart } from './chart'

export default function SectionCarousel() {
  return (
    <Carousel className="h-[300px] md:h-[400px] lg:h-[494px] w-full flex justify-center items-center">
      <CarouselContent>
        <CarouselItem className="relative">
          <Chart.LineChart className="w-[200px]  md:w-[450px] lg:w-[550px] " />
        </CarouselItem>
        <CarouselItem className="flex justify-center items-center">
          <Chart.RingChart className="w-[200px] md:w-[450px] lg:w-[550px]" />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="absolute hidden xl:inline-flex bottom-4 md:right-6 md:bottom-6" />
      <CarouselPrevious className="absolute hidden xl:inline-flex bottom-4 md:left-6 md:bottom-6" />
    </Carousel>
  )
}
