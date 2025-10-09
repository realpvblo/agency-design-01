import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CircleChevronDown, CirclePlay } from 'lucide-react';
import React from 'react';
import Iridescence from '../Iridescence';
import AnimatedContent from '../AnimatedContent';
import Prism from '../Prism';
import { RainbowButton } from '../ui/rainbow-button';

const Hero01 = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <Iridescence /> */}
        <Prism />
      </div>
      <AnimatedContent
        distance={50}
        direction="vertical"
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="text-center max-w-3xl relative z-10">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border inline-flex items-center justify-center"
            asChild
          >
            <a href="#" className="inline-flex items-center px-5">
              Studio Mango
            </a>
          </Badge>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
            Studio które pomaga Twojej firmie rosnąć
          </h1>
          <p className="mt-6 md:text-lg">
            Współpracujemy z firmami, aby tworzyć nowoczesne, responsywne i
            przyjazne dla użytkownika rozwiązania. Pokaż się w sieci z nami!
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            {/* <Button size="lg" className="rounded-full text-base">
              Skontaktuj się z nami <ArrowUpRight className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CircleChevronDown className="size-5" /> Czytaj więcej
            </Button> */}
            <RainbowButton className="rounded-full">
              Skontaktuj się z nami
            </RainbowButton>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Hero01;
