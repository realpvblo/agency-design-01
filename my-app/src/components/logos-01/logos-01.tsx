import { Logo01, Logo02, Logo03, Logo04 } from '@/components/logos-01/logos';

const Logos01Page = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center px-6">
      <div>
        <p className="text-center text-xl">
          Współpracowaliśmy z firmami takimi jak:
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-14">
          <Logo01 />
          <Logo02 />
          <Logo03 />
          <Logo04 />
        </div>
      </div>
    </div>
  );
};

export default Logos01Page;
