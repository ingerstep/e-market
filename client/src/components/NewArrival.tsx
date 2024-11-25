'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Card } from './Card';

export const PhoneCatalog = () => {
  const [category, setCategory] = useState('isNewArrival');
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    if (category) {
      axios
        .get(`http://localhost:3000/catalog/phones/category/${category}`)
        .then((response) => {
          setPhones(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error('Error fetching phones:', error));
    }
  }, [category]);

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
          {phones.map((phone: any) => (
            <Card
              key={phone.id}
              imgSrc={phone.imgPath[0].replace(/'/g, '')}
              price={`$${phone.price}`}
              link={`/catalog/phones/${phone.id}`}
              isLiked={phone.isLiked}
              name={phone.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
