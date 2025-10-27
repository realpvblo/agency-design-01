import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const portfolioItems = [
  {
    title: 'Studio Stelmaszek',
    description:
      'Minimalistyczna strona wizytówka dla fotografa i wideografa ślubnego Studio Stelmaszek.',
    image: '/portfolio/studioStelmaszekMOCKUP.png',
  },
  {
    title: 'Restauracja Oliwa',
    description:
      'Designerska wizytówka Restauracji Oliwa, łącząca elegancję z nowoczesnością.',
    image: '/portfolio/oliwa-wizytowka.jpg',
  },
  {
    title: 'Wkręceni w Eko',
    description:
      'Nowoczesny sklep internetowy oparty o silnik WordPress oraz wtyczkę WooCommerce.',
    image: '/portfolio/wkreceniwekoMOCKUP.png',
  },
  {
    title: 'Restauracja Oliwa',
    description:
      'Nowy projekt karty menu Restauracji Oliwa, łączący przejrzystość oraz klasę.',
    image: '/portfolio/oliwa-menu.jpg',
  },
  {
    title: 'Wkręceni w Eko',
    description:
      'Wizytówka dla Wkręconych w Eko, łącząca nowoczesny design z ekologicznymi wartościami.',
    image: '/portfolio/wkreceniweko-wizytowka.jpg',
  },
];

export default function CarouselWithMultipleSlides() {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Make sure buttons enable/disable depending on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollPrev(scrollLeft > 5);
      setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 5);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollByCard = (direction: 'next' | 'prev') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.portfolio-card');
    if (!card) return;
    const gap = 16; // matches tailwind gap-4 (4 * 4px)
    const cardWidth = Math.round(card.getBoundingClientRect().width + gap);
    const delta = direction === 'next' ? cardWidth : -cardWidth;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.classList.add('dragging', 'cursor-grabbing');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust the multiplier for sensitivity
    el.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    const el = scrollRef.current;
    if (el) el.classList.remove('dragging');
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust the multiplier for sensitivity
    el.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16">
      <h1 className="pointer-events-none text-center select-none text-7xl font-extrabold sm:text-9xl">
        Portfolio
      </h1>

      <div className="relative -mt-8">
        {/* Buttons */}
        <button
          aria-label="Previous"
          onClick={() => scrollByCard('prev')}
          disabled={!canScrollPrev}
          className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-md p-2 shadow-md transition-opacity disabled:opacity-40 bg-white/90 backdrop-blur-sm`}
          style={{ marginLeft: -12 }}
        >
          ‹
        </button>

        <button
          aria-label="Next"
          onClick={() => scrollByCard('next')}
          disabled={!canScrollNext}
          className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-md p-2 shadow-md transition-opacity disabled:opacity-40 bg-white/90 backdrop-blur-sm`}
          style={{ marginRight: -12 }}
        >
          ›
        </button>

        {/* Scroll area */}
        <div
          ref={scrollRef}
          className="no-scrollbar overflow-hidden mx-auto flex w-full gap-4 scroll-smooth py-2 md:gap-6"
          role="list"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              role="listitem"
              className="portfolio-card flex-shrink-0 w-[90%] max-w-[450px] sm:w-[80%] md:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_0.75rem)] mx-auto"
            >
              <Card className="select-none cursor-grab pt-2 relative overflow-hidden rounded-2xl border border-border/50 bg-background/20 backdrop-blur-sm shadow-[inset_0_1px_30px_0_rgba(255,255,255,0.1)] flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2">
                <CardContent className="px-2 pb-0 flex flex-col justify-end">
                  <div className="flex-grow h-56 w-full overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover rounded-2xl select-none"
                    />
                  </div>
                  <div className="px-2 pt-4">
                    <h2 className="text-lg font-semibold select-none">
                      {item.title}
                    </h2>
                    <span className="mt-1 block text-sm text-muted-foreground select-none">
                      {item.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
