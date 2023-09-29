import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoinsList from "../components/CoinsList";

function CoinListPage() {
  return (
    <div className="flex">
      <div>
        Cryptocurrencies:
        <div>Crytocoin name</div>
        <div>Crytocoin value</div>
        <div>Crytocoin index</div>
        <div>Crytocoin performance</div>
      </div>
      <CoinsList />
    </div>
  );
}

export default CoinListPage;
