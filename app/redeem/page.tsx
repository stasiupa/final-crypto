import React from "react";

import ProductBoard from "../components/ProductBoard";
import RedeemSearch from "../components/RedeemSearch";
import RedeemFilter from "../components/RedeemFilter";

function RedeemPage() {
  return (
    <div>
      <div className="text-center p-2 font-bold">
        You have /this amount/ of coins!
      </div>
      <div className="text-center p-2 font-bold">
        Redeem Your coins in the Fake Store below!
      </div>
      <div className="text-center p-2 font-bold">
        Products to get:
        <div className="">
          <RedeemFilter />
          <RedeemSearch />
          <ProductBoard />
        </div>
      </div>
    </div>
  );
}

export default RedeemPage;
