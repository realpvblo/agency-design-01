import './App.css';
import AnimatedContent from './components/AnimatedContent';
// import Pricing06 from './components/pricing/pricing';
import Footer05Page from './components/footer-05/footer-05';
import Features06Page from './components/features-06/features-06';
// import { Gallery6 } from './components/gallery6/gallery6';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import Hero01 from './components/hero-01/hero-01';
import Logos01Page from './components/logos-01/logos-01';
import FeaturesSection from './components/features-8';
import Features from './components/features-12';
import Navbar04Page from './components/navbar-04/navbar-04';
import Contact02Page from './components/contact-02/contact-02';
import PricingPage from './components/mvpblocks/pricing-glassmorphism';
// import SlideOpacity from './components/customized/carousel/carousel-10';
import CarouselWithMultipleSlides from './components/customized/carousel/carousel-02';

function App() {
  // function handleAnimationComplete(): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <>
      <ScrollProgress />
      <div className=" flex flex-col items-center">
        <Navbar04Page />
        {/* HERO SECTION */}
        {/* <div className="relative flex flex-col min-h-screen items-center justify-center text-center gap-5 w-full overflow-hidden">
          
          <div className="fixed z-50 backdrop-blur-md p-3 top-6 mx-auto flex gap-5 items-center bg-black/50 justify-between rounded-xl">
            <a href="#home">
              <img src="/vite.svg" alt="" />
            </a>
            <a href="#services">
              <p className="cursor-pointer font-medium hover:text-[#a9a9a9]">
                Usługi
              </p>
            </a>
            <a href="#portfolio">
              <p className="cursor-pointer font-medium hover:text-[#a9a9a9]">
                Portfolio
              </p>
            </a>
            <a href="#pricing">
              <p className="cursor-pointer font-medium hover:text-[#a9a9a9]">
                Cennik
              </p>
            </a>
            <Button className="cursor-pointer">Kontakt</Button>
          </div>

          
          <div
            id="home"
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <Beams
              beamWidth={3}
              beamHeight={30}
              beamNumber={20}
              lightColor="#ffffff"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={30}
            />
          </div>

          
          <div className="z-10 text-center p-5 m-auto flex flex-col max-w-4xl align-middle items-center">
            <FadeContent
              blur={true}
              duration={600}
              easing="ease-out"
              initialOpacity={0}
            >
              <Badge
                variant="outline"
                className="mb-5 font-bold text-sm bg-black/50 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="mr-1 w-4 h-4"
                >
                  <path
                    fill="#ededed"
                    d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"
                  />
                </svg>
                Witaj w Studio Waszkiewicz
              </Badge>
            </FadeContent>

            <SplitText
              text="Twoja wizja - nasza pasja"
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center pb-10"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <FadeContent
              blur={true}
              duration={600}
              easing="ease-out"
              initialOpacity={0}
            >
              <p className="mb-5 font-medium">
                Tworzymy strony internetowe, które nie tylko wyglądają świetnie,
                ale też działają tak, aby Twoi klienci zostawali dłużej i
                wracali.
              </p>
            </FadeContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <RainbowButton className="cursor-pointer">
                Dowiedz się więcej
              </RainbowButton>
            </AnimatedContent>
          </div>
        </div> */}

        <div className="relative flex flex-col min-h-screen items-center justify-center text-center gap-5 w-full overflow-hidden rounded-t-none rounded-b-[24px]">
          <Hero01 />
        </div>

        <Logos01Page />

        {/* INTRO SECTION (full screen, centered) */}
        {/* <section className="w-full flex items-center justify-center min-h-screen px-5">
          <div className="max-w-3xl text-center">
            <SplitText
              text="Nowoczesne strony i sklepy internetowe - zaprojektowane i stworzone tak, aby wyróżnić Cię w świecie cyfrowym."
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
        </section> */}

        <div className="w-full bg-gray-100 dark:bg-neutral-900 rounded-3xl">
          <FeaturesSection />
        </div>

        {/* FEATURES SECTION */}
        <section
          id="services"
          className="w-full flex items-center justify-center py-20 md:py-32"
        >
          <Features06Page />
        </section>

        {/* Divider */}
        {/* <hr className="faded-line w-full" /> */}

        <div className="w-full bg-gray-100 dark:bg-neutral-900 rounded-3xl">
          <Features />
        </div>

        {/* PORTFOLIO SECTION */}
        {/* <section
          id="portfolio"
          className="w-full flex items-center justify-center py-20 md:py-32"
        >
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
            <Gallery6 />
          </AnimatedContent>
        </section> */}

        {/* <SlideOpacity /> */}

<AnimatedContent
            distance={50}
            duration={1.2}
            ease="power3.out"
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
        <CarouselWithMultipleSlides />

          </AnimatedContent>

        {/* Divider */}
        {/* <hr className="faded-line w-full" /> */}

        {/* PRICING SECTION */}
        {/* <section
          id="pricing"
          className="w-full flex items-center justify-center py-20 md:py-32"
        >
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
            <Pricing06 />
          </AnimatedContent>
        </section> */}
        <AnimatedContent
            distance={50}
            duration={1.2}
            ease="power3.out"
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
<PricingPage />
          </AnimatedContent>
        

        <Contact02Page />
      </div>

      {/* FOOTER */}
      <Footer05Page />
    </>
  );
}

export default App;
