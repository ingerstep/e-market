import { ShowCase } from '@/components/ShowCase';
import { Button } from '@/components/ui/Button';
import { browseByCategory } from '@/data/BrowseByCategory';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full bg-alternate">
      <section className="bg-purpleMain flex justify-center">
        <div className="container flex justify-between">
          <div className="w-1/2 flex flex-col justify-center items-start text-white">
            <span className="text-2xl font-medium opacity-40">Pro.Beyond</span>
            <h1 className="text-7xl font-light">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <span className="text-base opacity-40 font-medium mb-6">
              Created to change everything for the better. For everyone
            </span>
            <Link href="/catalog/phones">
              <Button variant="primary">Shop Now</Button>
            </Link>
          </div>

          <Image
            src={'/img/iphone.png'}
            width={406}
            height={632}
            alt={'iphone 14'}
          />
        </div>
      </section>

      <section className="flex bg-white">
        <div className="flex w-1/2 flex-col">
          <ShowCase
            imgHeight={343}
            imgWidth={513}
            type="playstation"
            src="/img/playstation.png"
          />
          <div className="flex">
            <ShowCase
              imgHeight={132}
              imgWidth={145}
              divStyle="bg-secondary"
              type="airpods"
              src="/img/airpods.png"
            />
            <ShowCase
              imgHeight={132}
              imgWidth={145}
              divStyle="bg-alternate text-white"
              type="visionPro"
              src="/img/visionpro.png"
            />
          </div>
        </div>
        <div className="w-1/2">
          <ShowCase
            imgHeight={332}
            imgWidth={345}
            divStyle="flex-row-reverse bg-secondary h-full pl-14"
            type="mackbookAir"
            src="/img/macbook.png"
            linkSrc="/catalog/computers"
          />
        </div>
      </section>

      <section className="bg-white flex justify-center">
        <div className="container flex flex-col py-20">
          <h3 className="mb-5 text-3xl">Browse By Category</h3>
          <nav className="flex justify-between">
            {browseByCategory.map(({ href, text, svg }) => (
              <Link
                key={href}
                href={href}
                className="bg-secondary rounded-lg w-[160px] h-[128px] flex flex-col items-center justify-center gap-y-1"
              >
                {svg}
                {text}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
