'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { Card } from './Card';
import { Button } from './ui/Button';
import { categoryNewArrival } from './data/CategoryNewArrival';

import { useGetPhonesByCategoryQuery } from '@/store/newArrivalSlice';

export const PhoneCatalog = () => {
  const [category, setCategory] = useState('isNewArrival');
  const {
    data: phones = [],
    isLoading,
    isError,
  } = useGetPhonesByCategoryQuery(category);

  return (
    <section className="bg-white flex justify-center">
      <div className="container py-12 flex flex-col gap-8">
        <nav className="gap-8 flex">
          {categoryNewArrival.map(({ label, category: buttonCategory }) => (
            <Button
              key={buttonCategory}
              onClick={() => setCategory(buttonCategory)}
              variant="menu"
              className={clsx(
                category === buttonCategory &&
                  'opacity-100 border-b-2 border-black',
              )}
            >
              {label}
            </Button>
          ))}
        </nav>
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
      </div>
    </section>
  );
};
