"use client";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
import "swiper/css";
import Image from "next/image";
import { use, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Navigation, Pagination } from 'swiper/modules';

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductInd from "@/app/utils/productIndiv";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Link from "next/link";
// ProductDetail component
import { useCart } from "../../context/CartContext";
import { ProductsTypes } from './../../Types';
import recommdedProducts from "@/app/utils/recommdation";


const queryClientProduct = new QueryClient();


const ProductDetail = ({ id }: { id: number }) => {
  const { dispatch } = useCart(); 
  const [quantity, setQuantity] = useState<number>(1); 
  const [color, setColor] = useState<string>("")
  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: (): Promise<ProductsTypes> => ProductInd(id),
    staleTime: 100000,
    gcTime: 100000,
  });

  // Handle loading and error states
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-[80vh]">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-b-cyan-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (isError)
    return <p className="text-center text-red-500">{(error as Error).message}</p>;

  // Add product to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity,
          image: product.image,
        },
      });
    }
  };



  return (
    <div className="md:p-6 px-4 py-4">
      <div className="text-gray-500 mb-4">
          <Link href='/'  className="text-gray-600 font-semibold">
        Home
        </Link>
        &gt; <Link href='/product' className="text-black font-bold">
        Product
        </Link></div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Images Swiper */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Pagination, Navigation]} // Add Pagination and Navigation modules
                  navigation={{
          nextEl:` .slider-next`,
          prevEl:` .slider-prev`,
        }}
          pagination={{ clickable: true }} // Enable clickable pagination
          className="w-[300px] h-[520px] m-0"
        >
          {/* Add multiple slides from images array */}
  <SwiperSlide className="w-[300px] h-[450px]">
            <Image
              width={300}
              height={450}
              src={product?.image || "/placeholder.png"}
              alt={product?.title || "Product Image"}
              className="rounded-lg w-full object-cover"
            />
          </SwiperSlide>
                    <SwiperSlide className="w-[300px] h-[450px]">
            <Image
              width={300}
              height={450}
              src={product?.image || "/placeholder.png"}
              alt={product?.title || "Product Image"}
              className="rounded-lg w-full object-cover"
            />
          </SwiperSlide>
                <button
        className={`slider-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-3 w-14 h-20 justify-center items-center shadow-md border-2 hover:border-blue-500 active:border-blue-800 rounded-lg z-10 hidden md:flex text-2xl border-none`}
      >
        <AiOutlineLeft size={44} fill="white" />
      </button>
      <button
        className={`slider-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-3 w-14 h-20 justify-center items-center shadow-md hover:border-2 active:border-blue-800 hover:border-blue-500 rounded-lg z-10 hidden md:flex text-2xl border-none `}
      >
        <AiOutlineRight size={44} fill="white" />
      </button>
        </Swiper>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product?.title}</h1>

          <div className="flex items-center mb-2">
            <Rating
              value={product?.rating.rate}
              readOnly
              precision={0.5}
              emptyIcon={<StarBorderIcon sx={{ color: "gold" }} />}
              icon={<StarIcon sx={{ color: "gold" }} />}
              className="mr-2"
            />
            <span className="text-sm text-gray-500 font-semibold">(10 Reviews)</span>
          </div>

          <div className="text-3xl font-bold text-slate-700 mb-4">
            ${product?.price.toFixed(2)}
          </div>

          <div className="text-sm text-gray-600 font-semibold mb-4">
            Availability: <span className="text-blue-400 font-semibold">In Stock</span>
          </div>
  <div className="mt-2 flex gap-2">
      <div
        className={`w-4 h-4 bg-blue-600 rounded-full ${
          color === "blue" ? "border-2 border-black" : ""
        }`}
        onClick={() => setColor("blue")}
      ></div>
      <div
        className={`w-4 h-4 bg-green-500 rounded-full ${
          color === "green" ? "border-2 border-black" : ""
        }`}
        onClick={() => setColor("green")}
      ></div>
      <div
        className={`w-4 h-4 bg-orange-500 rounded-full ${
          color === "orange" ? "border-2 border-black" : ""
        }`}
        onClick={() => setColor("orange")}
      ></div>
      <div
        className={`w-4 h-4 bg-black rounded-full ${
          color === "black" ? "border-2 border-gray-600" : ""
        }`}
        onClick={() => setColor("black")}
      ></div>
    </div>
          <p className="text-gray-600 font-semibold mb-4">{product?.description}</p>
  <hr className="border-top-1 border-gray-500"/>
          <div className="flex items-center gap-4">
            <p className="text-gray-600 font-semibold">
              Quantity:
            </p>
            <button onClick={() => setQuantity((prev) => prev - 1)} className="w-8 h-14 font-semibold hover:text-gray-500 text-white bg-blue-400 hover:bg-blue-700
            active:bg-blue-900  rounded-lg">-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity((prev) => prev + 1)} className="w-8 h-14 font-semibold hover:text-gray-500 text-white bg-blue-400 hover:bg-blue-700
            active:bg-blue-900  rounded-lg">+</button>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-4 gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button className="rounded-full w-16 bg-gray-300">
              <FavoriteBorderOutlinedIcon fontSize="medium" sx={{ color: "gray" }} />
            </button>
            <button className="rounded-full w-16 bg-gray-300">
              <ShoppingCartOutlinedIcon fontSize="medium" sx={{ color: "gray" }} />
            </button>
            <button className="rounded-full w-16 bg-gray-300">
              <VisibilityIcon fontSize="medium" sx={{ color: "gray" }} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

const Comment = ({ id }: { id: number }) => {
  const idSet = id == 20 ? 1 : Number(id) + 2;
   const [data, setData] = useState<string>('Reviews');

  const {
    data: product,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", idSet],
    queryFn: (): Promise<ProductsTypes> => ProductInd(idSet),
    staleTime: 100000,
    gcTime: 100000,
  });
   const handleData =(word:string)=>{
   setData(word)
   }


  if (isError)
    return (
      <p className="text-center text-red-500">{(error as Error).message}</p>
    );

  return (
    <div className="mt-6 md:p-6 px-4 py-4">

      <div className="flex justify-between border-b border-gray-300 mb-4">
        <button className={`px-4 py-2  border-transparent  ${data=="Description"?"text-black border-black font-semibold":" text-gray-500 border-gray-600 font-semibold"} `} onClick={()=>handleData("Description")}>
          Description
        </button>
        <button className={`px-4 py-2  border-transparent  ${data=="Additional Information"?"text-black border-black font-semibold":" text-gray-500 border-gray-600 font-semibold"} `} onClick={()=>handleData("Additional Information")}>
          Additional Information
        </button>
        <button className={`px-4 py-2  border-transparent  ${data=="Reviews"?"text-black border-black font-semibold":" text-gray-500 border-gray-600 font-semibold"} `} onClick={()=>handleData("Reviews")}>
          Reviews ({product?.rating?.count})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="col-span-1">
          <Link href={`/product/${idSet}`} className="mt-6 md:p-6 px-4 py-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src={product?.image || "/placeholder.png"} // Ensure fallback image
              alt={product?.title || "Product Image"}
              width={308}
              height={390}
              className="object-contain w-[308] h-[390]"
            />
          </div>
              </Link>
        </div>

  {data=="Reviews"&&(
  <>
    <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            {product?.title || "No Title"}
          </h2>
          <p className="text-gray-600 mb-4">
            {product?.description || "No description available."}
          </p>
          <p className="text-gray-600 mb-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Additional Information
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
  </>
  )
  }
  {data=="Description"&&(
  <>
    <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            {product?.title || "No Title"}
          </h2>
          <p className="text-gray-600 mb-4">
            {product?.description || "No description available."}
          </p>
        </div>
  </>
  )
  }
  {data=="Additional Information"&&(
  <>

        <div className="">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Additional Information
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
            <li>&#8226; The quick fox jumps over the lazy dog</li>
          </ul>
        </div>
  </>
  )
  }
      </div>


      <hr className="w-full border-t-2 border-gray-600" />
    </div>
  );
};
const Recommendation = ({ id, val = 3 }: { id: number; val?: number }) => {
  const idSet = id <= 12 ? val : Number(id) + 2;

  const { data: Recommded, isError, error } = useQuery({
    queryKey: ["product",idSet],
    queryFn: (): Promise<ProductsTypes[]> => recommdedProducts(idSet),
    staleTime: 100000,
    gcTime: 100000,
  });

  if (isError) {
    return <p className="text-center text-red-500">{(error as Error).message}</p>;
  }

  if (!Array.isArray(Recommded) || Recommded.length === 0) {
    return <p className="text-center text-gray-500">No recommendations available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl:` .custom-next-${val}`,
          prevEl:` .custom-prev-${val}`,
        }}
        className="mySwiper"
      >
        {Recommded.map((product: ProductsTypes) => {
          const truncatedDescription = product.description
            ? product.description.slice(0, 60) + "..."
            : "No description available";

          return (
            <SwiperSlide key={product.id}>
              <Link href={`/product/${product.id}`}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-[236px] h-64 group">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={236}
                      height={256}
                      className="transform transition-transform duration-300 group-hover:scale-105 object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold text-lg truncate">{product.title}</h2>
                    <p className="text-gray-500">{truncatedDescription}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-green-600">${product.price}</span>
                      <span className="text-yellow-400 flex items-center">
                        <FaStar className="mr-1" /> {product.rating?.rate}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className={`custom-prev-${val} absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent p-3 w-20 h-36 justify-center items-center shadow-md border-2 hover:border-blue-500 active:border-blue-800 rounded-lg z-10 hidden md:flex`}
      >
        <AiOutlineLeft size={54} />
      </button>
      <button
        className={`custom-next-${val} absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent p-3 w-20 h-36 justify-center items-center shadow-md hover:border-2 active:border-blue-800 hover:border-blue-500 rounded-lg z-10 hidden md:flex`}
      >
        <AiOutlineRight size={54} />
      </button>
    </div>
  );
};


const Page = ({ params }: { params: Promise<{ id: number }> }) => {

  const resolvedParams = use(params);
  const { id } = resolvedParams;

  return (
    <QueryClientProvider client={queryClientProduct}>
      <ProductDetail id={id}/>
      <Comment id={id} />
      <h1 className="text-2xl pl-4 font-bold mb-6">Bestseller Products</h1>
      <Recommendation id={id}/>
      <Recommendation id={id} val={6}/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Page;
