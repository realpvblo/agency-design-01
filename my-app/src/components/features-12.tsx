import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  // ChartBarIncreasingIcon,
  // Database,
  // Fingerprint,
  // IdCard,
  Keyboard,
  LifeBuoy,
  PencilRuler,
  PhoneCall,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BorderBeam } from './ui/border-beam';

export default function Features() {
  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4';
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1');

  const images = {
    'item-1': {
      image: 'https://plus.unsplash.com/premium_photo-1682310473661-7a334b46e164?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1812',
      alt: 'Database visualization',
    },
    'item-2': {
      image: 'https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932',
      alt: 'Security authentication',
    },
    'item-3': {
      image: 'https://plus.unsplash.com/premium_photo-1682130130215-98574e89ab71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1742',
      alt: 'Identity management',
    },
    'item-4': {
      image: 'https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1738',
      alt: 'Analytics dashboard',
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 relative">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]" />
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Proces
          </h2>
          <p>
            Poznaj nasz sprawdzony proces realizacji projektów, który gwarantuje efektywność i satysfakcję na każdym etapie współpracy.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          {/* Accordion Section */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <PhoneCall className="size-4" />
                  Kontakt i omówienie projektu
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Rozmawiamy o Twoich potrzebach, analizujemy cele projektu i ustalamy jego zakres. To moment, w którym poznajemy Twoją wizję.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <PencilRuler className="size-4" />
                  Projektowanie i przygotowanie koncepcji
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Tworzymy propozycje graficzne, układy i szablony. Prezentujemy wstępne wersje, abyś mógł zobaczyć kierunek projektu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Keyboard className="size-4" />
                  Realizacja i wdrożenie
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Po akceptacji projektu przechodzimy do wdrożenia. Pracujemy nad stroną, aplikacją lub kampanią, dbając o każdy detal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <LifeBuoy className="size-4" />
                  Poprawki i wsparcie
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Wprowadzamy ewentualne poprawki, zapewniamy szkolenie z obsługi oraz stałe wsparcie po uruchomieniu projektu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image Section */}
          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]" />
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <img
                    src={images[activeItem].image}
                    alt={images[activeItem].alt}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
