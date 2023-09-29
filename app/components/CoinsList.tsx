import React from "react";

function CoinsList() {
  async function fetchCoinsList() {
    try {
      const response = await fetch("http://127.0.0.1:8000");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Błąd podczas pobierania danych");
      }
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  }
  fetchCoinsList();

  return <div>CoinsList</div>;
}

export default CoinsList;
