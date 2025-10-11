"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const portfolioItems = [
  { title: "Wkręceni w Eko", image: "/portfolio/wkreceniwekoMOCKUP.png" },
  { title: "Project Two", image: "/images/portfolio2.jpg" },
  { title: "Project Three", image: "/images/portfolio3.jpg" },
  { title: "Project Four", image: "/images/portfolio4.jpg" },
  { title: "Project Five", image: "/images/portfolio5.jpg" },
];

export default function SlideOpacity() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Calculate opacity for each slide based on current center slide
  // Center slide: opacity 100%, adjacent slides: opacity 30%, others: opacity 30%
  const getOpacity = (index: number) => {
    const total = portfolioItems.length;
    // Normalize indexes for looping
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;
    if (index === current) return "opacity-100";
    if (index === prevIndex || index === nextIndex) return "opacity-30";
    return "opacity-30";
  };

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-16">
      <h1 className="pointer-events-none text-center top-8 select-none whitespace-nowrap text-7xl font-extrabold sm:text-9xl">
        Portfolio
      </h1>

      <Carousel
        setApi={setApi}
        opts={{
          axis: "x",
          loop: true,
          align: "center",
          slidesToScroll: 1,
        }}
        className="relative z-10 w-full max-w-4xl mx-auto h-[600px]"
      >
        <CarouselContent className="flex flex-row gap-6">
          {portfolioItems.map((item, index) => (
            <CarouselItem key={index} className="basis-auto cursor-pointer p-1">
              <Card
                className={cn(
                  "text-white transition-opacity duration-500",
                  getOpacity(index)
                )}
              >
                <CardContent className="relative aspect-[9/16] p-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-md p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-20 text-white" />
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-20 text-white" />
      </Carousel>

      <div className="mt-6 text-center text-white font-semibold">
        {((current + 1 - 1 + portfolioItems.length) % portfolioItems.length) + 1} / {portfolioItems.length}
      </div>
    </div>
  );
}