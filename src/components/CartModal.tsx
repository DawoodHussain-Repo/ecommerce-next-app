import Image from 'next/image';
import React from 'react';

const cartItem = true;

const CartModal = () => {
  // Dummy products
  const products = [
    { id: 1, name: 'Product 1', price: 49, qty: 2, available: true },
    { id: 2, name: 'Product 2', price: 29, qty: 1, available: true },
    { id: 3, name: 'Product 3', price: 99, qty: 1, available: false },
  ];

  const subtotal = products.reduce((sum, product) => sum + product.price * product.qty, 0);

  return (
    <div className="absolute left-[-280px]  shadow-inner top-11 bg-gray-100 rounded-lg flex flex-col z-20 w-[400px] ">
      {!cartItem ? (
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="p-4">
          {/* Product List */}
          {products.map((product) => (
           
           <div key={product.id} className="flex gap-4 mb-4">
              <Image
                src="https://images.pexels.com/photos/10803797/pexels-photo-10803797.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt={product.name}
                width={50}
                height={50}
                className="object-cover rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{product.name}</p>
                  <p className="p-1 bg-gray-50 rounded-sm">${product.price}</p>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {product.available ? 'Available' : 'Out of Stock'}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm">Qty: {product.qty}</span>
                  <button className="text-blue-600 text-sm underline">Remove</button>
                </div>
              </div>
            </div>
            
          ))}

          {/* Subtotal Section */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">${subtotal}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-row justify-between  gap-2">
            <button className="text-blue-600 underline rounded-full">View Cart</button>
            <button className="bg-blue-600 text-white  rounded-full p-2 px-3 hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
