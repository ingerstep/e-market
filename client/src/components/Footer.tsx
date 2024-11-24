import Link from 'next/link';

import { footerServices } from './data/FooterServices';
import { LogoSvg } from './icons/Logo';
import { footerAssistance } from './data/FooterAssistance';
import { footerSocials } from './data/FooterSocials';

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-24">
      <div className="mx-auto container flex flex-col">
        <div className="flex justify-between mb-5">
          <div>
            <Link href="#">
              <LogoSvg col="white" />
            </Link>
            <p className="mt-2 max-w-[450px]">
              We are a residental interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 font-semibold">Services</h3>
            {footerServices.map(({ text, href }) => (
              <Link
                className="mb-1 font-light opacity-60"
                href={href}
                key={text}
              >
                {text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 font-semibold">Assistance to the buyer</h3>
            {footerAssistance.map(({ text, href }) => (
              <Link
                className="mb-1 font-light opacity-60"
                href={href}
                key={text}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
        <nav className="flex gap-6">
          {footerSocials.map(({ href, svg }, index) => (
            <Link key={index} href={href}>
              {svg}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
