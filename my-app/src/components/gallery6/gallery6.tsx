'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface GalleryItem {
  id: string;
  title?: string | null;
  summary?: string | null;
  url?: string | null;
  image?: string | null;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = 'Portfolio',
  items = [
    {
      id: 'item-0',
      title: null,
      summary: null,
      url: null,
      image: null,
    },
    {
      id: 'item-1',
      title: 'Wkręceni w Eko',
      summary:
        'Nowoczesny sklep internetowy oparty o silnik WordPress oraz wtyczkę WooCommerce.',
      url: '#',
      image: './portfolio/wkreceniwekoMOCKUP.png',
    },
    {
      id: 'item-2',
      title: 'Studio Stelmaszek',
      summary:
        'Minimalistyczna strona wizytówka dla Studia Stelmaszek, specjalizującego się w fotografii i wideografii ślubnej.',
      url: '#',
      image: './portfolio/studioStelmaszekMOCKUP.png',
    },
    {
      id: 'item-3',
      title: 'Restauracja Oliwa',
      summary:
        'Designerska wizytówka Restauracji Oliwa, łącząca elegancję z nowoczesnością.',
      url: '#',
      image: './portfolio/oliwa-wizytowka.jpg',
    },
    {
      id: 'item-4',
      title: 'Wkręceni w Eko',
      summary:
        'Wizytówka dla Wkręconych w Eko, łącząca nowoczesny design z ekologicznymi wartościami.',
      url: '#',
      image: './portfolio/wkreceniweko-wizytowka.jpg',
    },
    {
      id: 'item-5',
      title: 'Restauracja Oliwa',
      summary:
        'Nowy projekt menu Restauracji Oliwa, łączący przejrzystość oraz klasę.',
      url: '#',
      image: './portfolio/oliwa-menu.jpg',
    },
    {
      id: 'item-6',
      title: null,
      summary: null,
      url: null,
      image: null,
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container m-auto">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="ml-[50%] -translate-x-1/2 text-center">
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
              Zobacz wybrane realizacje naszych projektów - nowoczesne strony,
              sklepy i aplikacje, które pomagają naszym klientom wyróżnić się w
              świecie cyfrowym.
            </p>
          </div>
          {/* Desktop arrows (hidden on mobile) */}
          <div className="mt-8 hidden shrink-0 items-center justify-start gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
          className="relative w-full max-w-full md:left-[-1rem]"
        >
          <CarouselContent className="hide-scrollbar w-full max-w-full md:-mr-4 md:ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="ml-4 w-[90%] max-w-sm sm:ml-8 sm:w-auto md:max-w-[452px] first:invisible last:invisible"
              >
                <a
                  href={item.url ?? ''}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video sm:aspect-3/2 flex overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image ?? ''}
                            alt={item.title ?? ''}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="text-muted-foreground mb-6 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                    Read more{' '}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mobile arrows (centered below carousel) */}
      <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="disabled:pointer-events-auto"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
          className="disabled:pointer-events-auto"
        >
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export { Gallery6 };
