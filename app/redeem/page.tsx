import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";

function RedeemPage() {
  return (
    <div>
      Products to get:
      <div className="flex">
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default RedeemPage;
