import { ShowCase } from '@/components/ShowCase';
import { Button } from '@/components/ui/Button';
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
        <div className="flex flex-col">
          <ShowCase
            imgHeight={343}
            imgWidth={513}
            type="playstation"
            src="/img/playstation.png"
          />
          <div className="flex">
            <ShowCase
              imgHeight={272}
              imgWidth={245}
              type="airpods"
              src="/img/airpods.png"
            />
            <div className="flex flex-col">
              <h2>Apple Vision Pro</h2>
              <span>An immersive way to experience entertaiment.</span>
            </div>
          </div>
        </div>
        <div>
          <h2>Macbook Air</h2>
          <span>
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </span>
          <Link href="/catalog/computers">
            <Button variant="primary" className="text-black border-black">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
