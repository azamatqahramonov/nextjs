import Link from "next/link";

const Page = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const products = (await res.json()).data;

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Featured</h1>
        <div className="flex overflow-x-scroll space-x-6 scrollbar-hidden">
          {products.map((product) => (
            <div
              key={product.key}
              className="min-w-[250px] relative"
            >

              <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
                HOT
              </span>

              <img
                src={product.image}
                alt=""
                className="w-[262px] h-[349px] object-cover mb-4"
              />

              <button className="absolute bottom-24 left-[-30px] right-0 mx-11 w-[230px] bg-black text-white text-center py-2 rounded-[8px]">
                Add to Cart
              </button>

              <div className="mt-4">

                <Link href={`/product/${product.id}`}>
                  <h2 className="text-sm font-semibold mb-1">{product.name}</h2>
                </Link>
                <p className="text-gray-600 text-sm">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
};

export default Page;
