"use client"
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    image: '/product-1.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 2,
    image: '/product-2.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 3,
    image: '/product-3.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 4,
    image: '/product-4.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 5,
    image: '/product-5.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 6,
    image: '/product-6.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 7,
    image: '/product-7.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
  {
    id: 8,
    image: '/product-8.jpeg',
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: 16.48,
    discountedPrice: 6.48,
    colors: ['#00bcd4', '#4caf50', '#ff9800', '#795548'],
  },
];

const ProductCard: FC<{ product: typeof products[0] }> = ({ product }) => (<>
        <Link href={`/product/${product.id}`}  className="mt-4 flex items-center justify-center text-white py-2 px-4 rounded ">
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Image src={product.image} alt={product.title} width={300} height={400} className="w-full h-auto" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.department}</p>
      <div className="flex items-center mt-2">
        <span className="text-gray-500 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
        <span className="text-green-600 font-bold">${product.discountedPrice.toFixed(2)}</span>
      </div>
      <div className="flex mt-2">
        {product.colors.map((color, index) => (
          <span key={index} className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }}></span>
        ))}
      </div>

    </div>
  </div>
      </Link>
      </>
);

const ProductPage: FC = () => (<>
<br />
<div className="text-center w-full ">
  <h1 className='text-gray-400 font-semibold text-xl'>Features Product</h1>
  <p className='text-black font-extrabold text-2xl mt-2 px-8'>BESTSELLER PRODUCTS</p>

  <p className='text-gray-400 font-semibold text-lg'>Problems trying to resolve the conflict between </p>
</div>
  <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  </>
);

export default ProductPage;
