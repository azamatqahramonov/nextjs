import React from "react";

const PRODUCTS_URL = "http://localhost:5000/products";

const Page = async ({ params }) => {
  const id = params.id;

  const product = (await (await fetch(`${PRODUCTS_URL}/${id}`)).json()).data || {};

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Product Details</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {product.name && (
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
        )}
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 mb-4 rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Page;
