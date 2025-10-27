const logos = [
  { src: "/logos/wkreceniweko-logo.png", alt: "Logo 01" },
  { src: "/logos/stelmaszekstudio-logo.png", alt: "Logo 02" },
  { src: "/logos/oliwa-logo.png", alt: "Logo 03" },
  // { src: "/logos/logo04.svg", alt: "Logo 04" },
];

const Logos01Page = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center px-6">
      <div>
        <p className="text-center text-xl">
          Współpracowaliśmy z firmami takimi jak:
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-14">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto opacity-80 transition hover:opacity-100"
            />
            // max-h-8 sm:h-10 sm:max-h-10 md:h-12 md:max-h-12
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos01Page;
