import React from "react";

import ProductBoard from "../components/ProductBoard";

function RedeemPage() {
  return (
    <div>
      <div className="text-center p-2">You have /this amount/ of coins!</div>
      <div className="text-center p-2">
        Redeem Your coins in the Fake Store below!
      </div>
      <div>
        Products to get:
        <div className="flex">
          <ProductBoard />
        </div>
      </div>
    </div>
  );
}

export default RedeemPage;
