import React from 'react';

const Stats = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex justify-center space-x-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">4 Years</h2>
          <p>In Business</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">100+</h2>
          <p>Products</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">30+</h2>
          <p>Branch</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;