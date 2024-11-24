import Image from 'next/image';
import Link from 'next/link';

import { ShowCase } from '@/components/ShowCase';
import { Button } from '@/components/ui/Button';
import { browseByCategory } from '@/data/BrowseByCategory';
import { Card } from '@/components/Card';

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
            imgStyle="w-[513px] h-[343px]"
            type="playstation"
            src="/img/playstation.png"
          />
          <div className="flex">
            <ShowCase
              divStyle="bg-secondary"
              type="airpods"
              src="/img/airpods.png"
            />
            <ShowCase
              divStyle="bg-alternate text-white"
              type="visionPro"
              src="/img/visionpro.png"
            />
          </div>
        </div>
        <div className="w-1/2">
          <ShowCase
            imgStyle="w-[829px] h-[502px]"
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

      <section className="bg-white flex justify-center">
        <div className="container py-12 flex flex-col gap-8">
          <nav>
            <button>New Arrival</button>
            <button>Bestseller</button>
            <button>Featured Products</button>
          </nav>
          <div>
            <Card
              imgSrc={'/#'}
              price={'$329'}
              link={'/'}
              isLiked={true}
              name={'asffas'}
            />
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center">
        <ShowCase
          imgStyle="w-[371px] h-[390px]"
          divStyle="flex-col w-full gap-12 bg-white pb-12 text-center"
          type="popular"
          src="/img/popular.png"
          linkSrc="/catalog/smart-watches"
        />
        <ShowCase
          imgStyle="w-[371px] h-[390px]"
          divStyle="flex-col w-full gap-12 bg-primary pb-12 text-center"
          type="ipadPro"
          src="/img/ipadpro.png"
          linkSrc="/catalog/computers"
        />
        <ShowCase
          imgStyle="w-[371px] h-[390px]"
          divStyle="flex-col w-full gap-12 bg-secondary pb-12 text-center"
          type="samsung"
          src="/img/samsung.png"
          linkSrc="/catalog/phones"
        />
        <ShowCase
          imgStyle="w-[371px] h-[390px]"
          btnStyle="text-white border-white"
          divStyle="flex-col w-full gap-12 bg-alternate text-white pb-12 text-center"
          type="mackbookAir"
          src="/img/macbook.png"
          linkSrc="/catalog/computers"
        />
      </section>

      <section className="bg-gradient-to-r from-alternate via-tertiary to-alternate flex justify-center text-white py-48 relative">
        <Image
          width={310}
          height={200}
          className="absolute top-0 left-[19%]"
          alt="summer sale"
          src="/img/summer/macbook.png"
        />
        <Image
          width={350}
          height={200}
          className="absolute top-[48%] left-0"
          alt="summer sale"
          src="/img/summer/ipadpro.png"
        />
        <Image
          width={300}
          height={200}
          className="absolute top-[13%] left-[4%]"
          alt="summer sale"
          src="/img/summer/ipad.png"
        />
        <Image
          width={230}
          height={200}
          className="absolute top-[2%] right-0"
          alt="summer sale"
          src="/img/summer/iphone.png"
        />
        <Image
          width={400}
          height={200}
          className="absolute bottom-0 right-0"
          alt="summer sale"
          src="/img/summer/watch.png"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-7xl mb-4">
            Big Summer <span className="font-bold">Sale</span>
          </h2>
          <p className="opacity-50 mb-10">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <Link href="/catalog/phones">
            <Button variant="primary">Shop Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
