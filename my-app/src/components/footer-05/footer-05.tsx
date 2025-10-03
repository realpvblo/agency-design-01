import { Separator } from '@/components/ui/separator';
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from 'lucide-react';

const footerLinks = [
  { title: 'Start', href: '#home' },
  { title: 'Usługi', href: '#services' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Cennik', href: '#pricing' },
  { title: 'Kontakt', href: '#contact' },
  // { title: 'Privacy', href: '#' },
];

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <svg
              id="logo-7"
              width="124"
              height="32"
              viewBox="0 0 124 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* skróciłem – SVG zostaje ten sam */}
              <path
                d="M36.87 10.07H39.87V22.2H36.87V10.07Z"
                className="fill-foreground"
              />
            </svg>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{' '}
              <a href="/" target="_blank" className="hover:text-foreground">
                Studio Waszkiewicz
              </a>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </a>
              <a href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
