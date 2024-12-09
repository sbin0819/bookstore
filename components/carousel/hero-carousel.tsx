'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { carouselData } from '@/features/recomendation/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type CarouselItem = (typeof carouselData)[number];

interface HeroCarouselProps {
  list: CarouselItem[];
}

export default function HeroCarousel({ list }: HeroCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {list.map((item, index) => (
            <CarouselItem key={index}>
              <Link href={'/events'}>
                <div
                  className={cn(
                    'relative h-[380px] cursor-pointer rounded-xl p-1'
                  )}
                >
                  <Image
                    className="object-cover"
                    src={item.imageSrc}
                    alt={'hero-icons'}
                    fill
                  />
                  <div className="absolute bottom-0 w-full">
                    <div className="flex h-52 w-full items-end justify-between bg-gray-950/5 px-4 pb-10">
                      <div className="max-w-full text-white md:max-w-80">
                        <div>
                          <h2 className="text-xl font-semibold md:text-3xl">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-lg">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-gray-950/10 px-4 py-1 font-semibold">
                        <span className="text-lg text-white">{current}</span>
                        <span className="text-gray-200">/</span>
                        <span className="text-gray-200">{count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
