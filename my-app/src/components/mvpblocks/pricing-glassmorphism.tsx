import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  tag: string;
  link: string;
  highlight?: boolean;
};

const pricingData: Record<string, PricingPlan[]> = {
  web: [
    {
      name: 'Podstawowy',
      price: 'od 1999 zł',
      description: 'Idealny dla małych firm i freelancerów',
      features: [
        '1–2 sekcje (np. oferta, kontakt)',
        'WordPress + gotowy szablon',
        '3 propozycje demo do wyboru',
        'Uzupełnienie treścią, logo i kolorami',
      ],
      cta: 'Zamów stronę',
      link: '#',
      tag: 'Strony WWW',
    },
    {
      name: 'Standardowy',
      price: 'od 2999 zł',
      description: 'Dla rozwijających się firm',
      features: [
        '3–5 podstron (Home, O nas, Oferta, Blog, Kontakt)',
        'Indywidualny projekt graficzny',
        'Integracja z Google Analytics',
        'Optymalizacja pod SEO',
      ],
      cta: 'Zamów stronę',
      link: '#',
      tag: 'Strony WWW',
      highlight: true,
    },
    {
      name: 'Premium',
      price: 'od 4999 zł',
      description: 'Dla wymagających klientów',
      features: [
        'Pełny custom design',
        'CMS dopasowany do potrzeb',
        'Zaawansowana analityka',
        'Wsparcie techniczne 12 miesięcy',
      ],
      cta: 'Skontaktuj się',
      link: '#',
      tag: 'Strony WWW',
    },
  ],
  shop: [
    {
      name: 'Sklep Start',
      price: 'od 3999 zł',
      description: 'Idealny dla małych sklepów online',
      features: [
        'Do 50 produktów',
        'WooCommerce lub Shopify',
        'Integracja z płatnościami online',
        'Szkolenie z obsługi panelu',
      ],
      cta: 'Zamów sklep',
      link: '#',
      tag: 'Sklepy Internetowe',
    },
    {
      name: 'Sklep PRO',
      price: 'od 6999 zł',
      description: 'Dla rozwijających się e-commerce',
      features: [
        'Nieograniczona liczba produktów',
        'Integracja z Allegro / hurtowniami',
        'Zaawansowana analityka sprzedaży',
        'Wsparcie techniczne 12 miesięcy',
      ],
      cta: 'Zamów sklep',
      link: '#',
      tag: 'Sklepy Internetowe',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'od 9999 zł',
      description: 'Dla dużych sklepów i marek',
      features: [
        'Dedykowany projekt UX/UI',
        'Integracje z systemami ERP / CRM',
        'Pełna automatyzacja procesów',
        'Stała opieka techniczna i marketingowa',
      ],
      cta: 'Skontaktuj się',
      link: '#',
      tag: 'Sklepy Internetowe',
    },
  ],
  marketing: [
    {
      name: 'Start',
      price: 'od 999 zł',
      description: 'Dla początkujących marek',
      features: [
        'Podstawowa strategia kampanii',
        'Konfiguracja Meta Ads',
        'Optymalizacja reklam',
        'Raport miesięczny',
      ],
      cta: 'Zamów kampanię',
      link: '#',
      tag: 'Marketing',
    },
    {
      name: 'Aktywny Wzrost',
      price: 'od 2499 zł',
      description: 'Dla firm chcących zwiększyć sprzedaż',
      features: [
        'Kampanie Meta + Google Ads',
        'Retargeting',
        'Analityka i raporty',
        'Optymalizacja konwersji',
      ],
      cta: 'Zamów kampanię',
      link: '#',
      tag: 'Marketing',
      highlight: true,
    },
    {
      name: 'Premium Marketing',
      price: 'od 4999 zł',
      description: 'Dla dużych marek z ambitnymi celami',
      features: [
        'Kompleksowa strategia 360°',
        'SEO + Content + Ads',
        'Dedykowany opiekun kampanii',
        'Cotygodniowe raporty i rekomendacje',
      ],
      cta: 'Skontaktuj się',
      link: '#',
      tag: 'Marketing',
    },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 150 },
  },
};

const PricingPage = ({ className }: { className?: string }) => {
  const [activeCategory, setActiveCategory] = React.useState<'web' | 'shop' | 'marketing'>('web');

  return (
    <div className={cn('relative w-full', className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <h1 className="text-center text-[7rem] font-bold md:text-[10rem]">Cennik</h1>
      </div>


      {/* Pricing Cards */}
      <div className="relative container pt-28 md:pt-40 pb-16 mx-auto mt-20">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {pricingData[activeCategory].map((plan) => (
            <PricingCard key={plan.name} variants={itemVariants} plan={plan} />
          ))}
        </motion.div>
      </div>

      {/* Category Selector (moved below cards) */}
      <div className="flex justify-center gap-4">
        {[
          { key: 'web', label: 'Strony WWW' },
          { key: 'shop', label: 'Sklepy Internetowe' },
          { key: 'marketing', label: 'Marketing' },
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key as 'web' | 'shop' | 'marketing')}
            className={cn(
              'px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300',
              activeCategory === cat.key
                ? 'bg-primary text-black border-primary'
                : 'bg-transparent text-foreground/70 hover:text-foreground hover:border-foreground/30'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

interface PricingCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  plan: PricingPlan;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ plan, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 border border-border/50',
          'bg-background/20 backdrop-blur-sm shadow-[inset_0_1px_30px_0_rgba(255,255,255,0.1)]',
          plan.highlight && 'border-primary/50 shadow-lg scale-[1.02]',
          className
        )}
        whileHover={{ y: -8 }}
        {...props}
      >
        <div>
          <div className="text-muted-foreground text-sm font-medium mb-2">{plan.tag}</div>
          <div className="mt-2 text-5xl font-bold from-foreground bg-gradient-to-r to-transparent bg-clip-text text-transparent">
            {plan.price}
          </div>
          <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.description}</p>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <div className="bg-foreground/10 shadow-foreground/50 mr-3 rounded-full p-1 shadow-inner">
                  <Check className="h-4 w-4" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className={cn(
            'after:bg-primary/80 relative w-full after:absolute after:-z-10 after:h-full after:w-full after:blur-xs'
          )}
        >
          {plan.cta}
        </Button>
      </motion.div>
    );
  }
);

PricingCard.displayName = 'PricingCard';

export default PricingPage;