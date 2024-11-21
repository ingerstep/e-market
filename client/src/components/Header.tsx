import Link from 'next/link';
import { CartSvg } from '@/components/icons/Cart';
import { LikeSvg } from '@/components/icons/Like';
import { LogoSvg } from '@/components/icons/Logo';
import { UserSvg } from '@/components/icons/User';
import { headerNavLinks } from '@/data/HeaderNavLinks';
import { headerSubnavLinks } from '@/data/HeaderSubnavLinks';

export const Header = () => {
  return (
    <header className="w-full font-roboto-medium">
      <div className="w-full bg-primary text-tertiary py-4">
        <div className="mx-auto container flex items-center justify-between">
          <Link href="/">
            <LogoSvg />
          </Link>
          <input
            type="text"
            className="p-4 pl-[38px] rounded-lg shadow-lg w-full bg-search-pattern bg-[14px_16px] bg-no-repeat max-w-[480px]"
            placeholder="Search"
          />
          <nav>
            <ul className="flex gap-[52px]">
              {headerNavLinks.map(({ href, text }, index) => (
                <li key={index}>
                  <Link href={href}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-6">
            <button>
              <LikeSvg />
            </button>
            <button>
              <CartSvg />
            </button>
            <button>
              <UserSvg />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-alternate text-tertiary py-2">
        <div className="container mx-auto py-2">
          <ul className="w-full flex justify-between font-roboto-medium text-neutralLight">
            {headerSubnavLinks.map(({ href, text, svg }, index) => (
              <li key={index}>
                <Link className="flex gap-2" href={href}>
                  {svg}
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
