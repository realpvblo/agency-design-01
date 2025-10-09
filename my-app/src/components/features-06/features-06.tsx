import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';

const features = [
  {
    category: 'Projektowanie stron',
    title: 'Responsywne i unikalne strony www',
    details:
      'Tworzymy strony internetowe, które nie tylko wyglądają świetnie, ale działają płynnie na wszystkich urządzeniach. Twoja strona będzie odzwierciedlać unikalną tożsamość Twojej marki.',
    tutorialLink: '#',
    image: './stronyInternetowe.png',
  },
  {
    category: 'Sklepy internetowe',
    title: 'Sprzedawaj online bez problemów',
    details:
      'Uruchom swój sklep w sieci szybko i bez komplikacji, z bezpiecznymi płatnościami i łatwym zarządzaniem produktami. Maksymalizuj sprzedaż przy minimalnym wysiłku.',
    tutorialLink: '#',
    image: './sklepyInternetowe.png',
  },
  {
    category: 'Marketing cyfrowy',
    title: 'Zwiększ zasięg i sprzedaż',
    details:
      'Od kampanii w social media po SEO - pomagamy Twojej marce dotrzeć do odpowiednich odbiorców, zwiększać zaangażowanie i konwersje.',
    tutorialLink: '#',
    image: './marketingCyfrowy.png',
  },
  {
    category: 'Projekty graficzne',
    title: 'Stwórz spójną i zapadającą w pamięć markę',
    details:
      'Pomagamy firmom określić głos marki, tożsamość wizualną i obecność w sieci, tworząc spójną i zapadającą w pamięć historię marki.',
    tutorialLink: '#',
    image: './projektyGraficzne.png',
  },
];

const Features06Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
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
          <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
            Wzmocnij swoją strategię online
          </h2>
          <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
            Skorzystaj z inteligentnych narzędzi i nowoczesnych rozwiązań dla
            sukcesu Twojej marki.
          </p>
        </AnimatedContent>

        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
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
            {features.map((feature) => (
              <div
                key={feature.category}
                className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
              >
                <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2">
                  {/* Miejsce na grafikę lub ilustrację */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="basis-1/2 shrink-0">
                  <span className="uppercase font-medium text-sm text-muted-foreground">
                    {feature.category}
                  </span>
                  <h4 className="my-3 text-2xl font-semibold tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">{feature.details}</p>
                  <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                    <a href={feature.tutorialLink}>
                      Dowiedz się więcej <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
