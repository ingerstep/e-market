'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { AppDispatch, RootState } from '@/store';
import { useEffect } from 'react';
import { fetchPhonesByDiscount } from '@/store/phonesDiscountSlice';

export const Discounts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { phones, loading, error } = useSelector(
    (state: RootState) => state.phonesDiscount,
  );

  useEffect(() => {
    dispatch(fetchPhonesByDiscount());
  }, [dispatch]);

  return (
    <section className="bg-white flex justify-center">
      <div className="container py-12 flex flex-col gap-8">
        <h2>Discounts up to -50%</h2>
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
