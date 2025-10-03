import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';

// Typ pojedynczego planu
type Plan = {
  name: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isRecommended?: boolean;
};

// Typ dla wszystkich kategorii cenników
type PlansData = {
  websites: Plan[];
  shops: Plan[];
  graphics: Plan[];
};

// Dane do cenników
const plansData: PlansData = {
  websites: [
    {
      name: 'Podstawowa',
      price: 1499,
      isRecommended: true,
      description:
        'Najprostsza i najszybsza strona – dla osób, które chcą tylko wizytówkę online.',
      features: [
        'Strona 1-2 sekcje (np. oferta, kontakt)',
        'WordPress + gotowy szablon',
        '3 propozycje demo do wyboru',
        'Uzupełnienie treścią, logo, kolorami',
        'Integracja z formularzem kontaktowym',
      ],
      buttonText: 'Zamów stronę',
    },
    {
      name: 'Standard',
      price: 2999,
      isPopular: true,
      description:
        'Średni pakiet dla firm chcących coś więcej niż prosty szablon, ale wciąż budżetowo.',
      features: [
        '3-5 podstron (np. Home, O nas, Oferta, Blog, Kontakt)',
        'Projekt i kod w oparciu o gotowe komponenty (React/HTML/CSS)',
        'Skeleton/demo w 3 wariantach do wyboru',
        'Responsywność, optymalizacja SEO podstawowa',
        'Integracja z Google Analytics',
      ],
      buttonText: 'Zamów stronę',
    },
    {
      name: 'Premium',
      price: 4999,
      description:
        'Zaawansowana strona internetowa z dodatkowymi funkcjonalnościami.',
      features: [
        'Projekt graficzny UI/UX od 0',
        'Kodowanie od podstaw (React/Next.js/Strapi/itp.)',
        'Dowolna liczba podstron / funkcjonalności',
        'Integracje z systemami (CRM, newsletter, e-commerce)',
        'SEO zaawansowane + wydajność',
      ],
      buttonText: 'Zamów stronę',
    },
  ],
  shops: [
    {
      name: 'Sklep Start',
      price: 3999,
      description: 'Podstawowy sklep internetowy dla małych firm.',
      features: [
        'Do 20 produktów',
        'WooCommerce / Shopify',
        'Responsywność + podstawowe SEO',
        'Integracja z płatnościami online',
      ],
      buttonText: 'Zamów sklep',
    },
    {
      name: 'Sklep Premium',
      price: 7999,
      isPopular: true,
      description:
        'Rozbudowany sklep z integracjami i automatyzacją sprzedaży.',
      features: [
        'Nieograniczona liczba produktów',
        'Zaawansowane integracje (hurtownie, CRM, ERP)',
        'Moduły rabatów, kuponów, program lojalnościowy',
        'Pełne SEO + optymalizacja wydajności',
      ],
      buttonText: 'Zamów sklep',
    },
  ],
  graphics: [
    {
      name: 'Logo',
      price: 599,
      description: 'Profesjonalne logo dla Twojej marki.',
      features: [
        '3 propozycje projektów',
        '2 tury poprawek',
        'Pliki do druku i internetu',
      ],
      buttonText: 'Zamów projekt',
    },
    {
      name: 'Identyfikacja wizualna',
      price: 2499,
      description: 'Kompletny zestaw materiałów graficznych.',
      features: [
        'Logo',
        'Księga znaku',
        'Wizytówki, banery, szablony social media',
      ],
      buttonText: 'Zamów pakiet',
    },
  ],
};

const Pricing06 = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof PlansData>('websites');
  const plans = plansData[activeCategory];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-4xl font-semibold text-center tracking-tighter">
        Cennik
      </h1>
      <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
        Wybierz interesującą Cię usługę, aby zobaczyć szczegółowy cennik.
      </p>

      {/* guziki przełączania */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Button
          variant={activeCategory === 'websites' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('websites')}
          className="cursor-pointer"
        >
          Strony internetowe
        </Button>
        <Button
          variant={activeCategory === 'shops' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('shops')}
          className="cursor-pointer"
        >
          Sklepy internetowe
        </Button>
        <Button
          variant={activeCategory === 'graphics' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('graphics')}
          className="cursor-pointer"
        >
          Projektowanie graficzne
        </Button>
      </div>

      {/* siatka z planami */}
      <div className="mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-10 lg:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn('relative border p-7 rounded-xl flex flex-col', {
              'border-2 border-primary py-12': plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Najlepszy wybór
              </Badge>
            )}
            {plan.isRecommended && !plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Polecane
              </Badge>
            )}

            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">od {plan.price} zł</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? 'default' : 'outline'}
              size="lg"
              className="w-full mt-6 cursor-pointer"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing06;
