import React from 'react';

const DiscountForm: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-background rounded-3xl shadow-lg ">
      <h2 className="text-3xl font-bold text-center p-5">Avail Flat 45% OFF</h2>
      
      <form className="space-y-3 p-4">
        <input
          name='name'
          type="text"
          placeholder="Enter Your Full Name"
          className="w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        <input
          name='email'
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        <input
          name='phone'
          type="tel"
          placeholder="Enter Your Phone Number"
          className="w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        
        <div className="pt-4 ">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">PROMO CODE</span>
            <span className="font-bold text-muted-foreground text-xl">MA-OFF15</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-red-600">DISCOUNT</span>
            <span className="font-bold text-2xl text-red-600">15%</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4 italic ">Start a live chat to know about more ongoing discount offers!</p>

      </form>
        <button
          type="button"
          className="w-full bg-orange-500 text-white py-5 rounded rounded-bl-3xl rounded-br-3xl mt-6 font-semibold hover:bg-orange-600">
          ENJOY DISCOUNT NOW
        </button>
    </div>
  );
};

export default DiscountForm;
