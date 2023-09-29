import Image from "next/image";

async function ProductBoard() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <ul className="flex flex-wrap w-full justify-evenly">
        {products ? (
          products.map((product: any) => (
            <li key={product.id} className=" border border-black m-1 w-72">
              <div className="border border-black m-1 p-1">
                <div>Name: </div>
                <h1>{product.title}</h1>
              </div>
              <div className="border border-black m-1 p-1">
                <div>Category: </div>
                <h2>{product.category}</h2>
              </div>
              <Image
                src={product.image}
                alt="product image"
                width={200}
                height={200}
              />
              <div>
                <div>Description: </div>
                <p>{product.description}</p>
              </div>
              <div>
                <p>Price: ${product.price}</p>
              </div>
              <button className="border border-black p-1 m-1">
                GET THIS ITEM!
              </button>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
}

export default ProductBoard;
