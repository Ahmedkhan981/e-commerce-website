"use client";

import { NextPage } from "next";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import fetchProducts from "../utils/fakestore";
import Image from "next/image"; // Import Next.js Image component
import { ProductsTypes } from '../Types';
import Link from "next/link";

// Initialize the Query Client
const queryClient = new QueryClient();

const ProductCard = ({ product }: { product: ProductsTypes }) => {
  return (

    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-[288px] h-[346px]">
      <Image
        className="w-full h-56 object-contain"
        src={product.image}
        alt={product.title}
        width={500} // Use a fixed width for optimization
        height={300} // Use a fixed height for optimization
priority
      />
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 truncate">{product.title}</h5>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm line-through text-gray-500">
            ${(product.price + 10).toFixed(2)}
          </span>
          <span className="text-lg font-semibold text-green-600">${product.price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const ProductPageContent = () => {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 100000,
    gcTime: 100000,
  });

  if (isLoading) return (<div className="flex justify-center items-center w-full h-[80vh]"> <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-b-cyan-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
    </div></div>);
  if (isError) return( <p className="text-center text-red-500">Error fetching products.</p>);

  return (
    <div className="flex flex-wrap justify-normal md:justify-center gap-6 p-4">
      {products?.map((product:ProductsTypes) => (
            <Link href={`/product/${product.id}` } key={product.id} >
        <ProductCard  product={product} />
        </Link>
      ))}
    </div>
  );
};

const Page: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold text-center mt-4 mb-6">Product Page</h1>
      <ProductPageContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Page;
