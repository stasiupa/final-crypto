import React from "react";

function ProductItem() {
  return (
    <div>
      <div className="m-5 p-2 border-2 border-black">
        Product 1<div>Product description</div>
        <div>Product image</div>
        <div>Product price</div>
        <button className="border-2 border-green-800 p-1 text-green-800 bg-black">
          Get this item!
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
