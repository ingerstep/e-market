'use client';

import Link from 'next/link';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArrowSvg } from './icons/Arrow';
import { Card } from './Card';

import { Categories, RootState } from '@/store/types';
import { useAppDispatch } from '@/hooks';
import { fetchPhones } from '@/store/phonesSlice';

interface CatalogProps {
  page: Categories;
}

export const Catalog: FC<CatalogProps> = ({ page }) => {
  const dispatch = useAppDispatch();
  const { phones, loading, error } = useSelector(
    (state: RootState) => state.phones,
  );

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <main className="w-full bg-white flex flex-col container mx-auto">
      <nav className="flex justify-start w-full gap-8 py-10">
        <Link className="text-catalog" href={'/'}>
          home
        </Link>
        <ArrowSvg />
        <Link className="text-catalog" href={'/'}>
          catalog
        </Link>
        <ArrowSvg />
        <Link href={`/catalog/${page}`}>{page}</Link>
      </nav>
      <aside></aside>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {phones.map(({ id, imgPath, isLiked, name, price }) => (
          <Card
            key={id}
            imgSrc={imgPath[0].replace(/'/g, '')}
            price={`$${price}`}
            link={`/catalog/phones/${id}`}
            isLiked={isLiked}
            name={name}
          />
        ))}
      </div>
    </main>
  );
};
