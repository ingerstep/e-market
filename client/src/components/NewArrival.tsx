'use client';

import { useState } from 'react';

import { Card } from './Card';
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
        <nav>
          <button onClick={() => setCategory('isNewArrival')}>
            New Arrival
          </button>
          <button onClick={() => setCategory('isBestseller')}>
            Bestseller
          </button>
          <button onClick={() => setCategory('isFeatured')}>
            Featured Products
          </button>
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
