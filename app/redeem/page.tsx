import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RedeemPage() {
  return (
    <div>
      Products to get:
      <div className="flex">
        <div className="m-5 p-2 border-2 border-black">
          Product 1<div>Product description</div>
          <div>Product image</div>
          <div>Product price</div>
          <button className="border-2 border-green-800 p-1 text-green-800 bg-black">
            Get this item!
          </button>
        </div>
        <div className="m-5 p-2 border-2 border-black">
          Product 2<div>Product description</div>
          <div>Product image</div>
          <div>Product price</div>
          <button className="border-2 border-green-800 p-1 text-green-800 bg-black">
            Get this item!
          </button>
        </div>
      </div>
    </div>
  );
}

export default RedeemPage;
