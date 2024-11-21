import { Button } from '@/components/ui/Button';
import Image from 'next/image';

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
            <Button variant="primary">Shop Now</Button>
          </div>

          <Image
            src={'/img/iphone.png'}
            width={406}
            height={632}
            alt={'iphone 14'}
          />
        </div>
      </section>
    </main>
  );
}
