import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiViewGrid } from "react-icons/hi";
import ProductPage from './../Components/Layout/ProductLayout';
const Shop: FC = () => {
  const images = [
    '/shopgirl-1.jpeg',
    '/girl-with-bags.jpeg',
    '/shopgirl-2.jpeg',
    '/shopgirl-3.jpeg',
    '/shopgirl-4.jpeg',
  ];

  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <Link href="/shop" key={index} className="block relative h-[235px] ">
              <Image
                src={image}
                alt={`Cloth ${index + 1}`}
                width={500}
                height={235}
                className="rounded-lg  h-[235px]"
              />
              <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center rounded-lg text-white text-xl font-bold">
                CLOTHS
                <br />
                5 Items
              </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>Showing all 12 results</span>
        <div className="flex items-center">
          <span className="mr-2">Views:</span>
          <button className="p-2">
<HiViewGrid size={24}/>
          </button>
        </div>
        <select className="p-2 border rounded">
          <option>Popularity</option>
          {/* Add more sorting options here */}
        </select>
        <button className="p-2 bg-blue-500 text-white rounded ml-2">Filter</button>
      </div>
      <div className="flex justify-around items-center mt-8">
        <Image src="/Svg/hooli.svg" alt="Hooli" width={100} height={50} />
        <Image src="/Svg/lyft.svg" alt="Lyft" width={100} height={50} />
        <Image src="/Svg/stripe.svg" alt="Stripe" width={100} height={50} />
        <Image src="/Svg/aws.svg" alt="AWS" width={100} height={50} />
        <Image src="/Svg/reddit.svg" alt="Reddit" width={100} height={50} />
      </div>
    </div>
    <ProductPage />
    </>
  );
};

export default Shop;
