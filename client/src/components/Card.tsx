import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LikeSvg } from './icons/Like';
import { Button } from './ui/Button';

interface CardProps {
  imgSrc: string;
  price: string;
  link: string;
  isLiked: boolean;
  name: string;
}

export const Card: FC<CardProps> = ({ imgSrc, isLiked, price, link, name }) => {
  return (
    <div className="flex flex-col items-center px-4 py-5 w-[268px] gap-4 bg-primary rounded-xl">
      <Button className="self-end">
        <LikeSvg isLiked={isLiked} stroke="#666" />
      </Button>
      <Image
        width={160}
        height={160}
        src={imgSrc}
        alt={name}
        className="mb-auto"
      />
      <span className="font-medium">{name}</span>
      <span className="text-2xl font-semibold">{price}</span>
      <Link
        className="py-3 px-14 text-center font-medium rounded-xl bg-black text-white text-sm"
        href={link}
      >
        Buy Now
      </Link>
    </div>
  );
};
