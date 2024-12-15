"use client";

import Image from "next/image";
import { CartItem, useCart } from '../context/CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const totalPrice = state.items.reduce(
    (total: number, item: CartItem): number => total + item?.price * item?.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <p className="text-center mt-10 h-[100vh] flex justify-center items-center text-gray-600 font-semibold">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Your Cart</h1>
      <div className="flex flex-col gap-4 md:gap-6">
        {state.items.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4"
          >
            <div className="flex items-start md:items-center gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded"
              />
              <div className="flex flex-col">
                <h2 className="font-semibold text-sm md:text-base">{item.title}</h2>
                <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
                className="w-16 border rounded p-1"
              />
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-sm md:text-base"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h3 className="text-lg md:text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default CartPage;
