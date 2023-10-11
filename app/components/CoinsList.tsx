import Image from "next/image";

async function CoinsList() {
  const res = await fetch("http://127.0.0.1:8000/api/coin/coin-list/");
  const coinList = await res.json();
  // console.log(coinList);

  return (
    <div className="">
      <ul className="flex flex-wrap">
        {coinList ? (
          coinList.map((coin: any) => (
            <li key={coin.id} className="border border-black m-1">
              <div>
                <div>Name:</div>
                <h1>{coin.name}</h1>
              </div>
              {/* <div>
                <Image src={coin.image} alt="coin img" width={40} height={40} />
              </div>
              <div>
                <div>Current price:</div>
                <h1>{coin.current_price}</h1>
              </div>
              <div>
                <div>Name:</div>
                <h1>{coin.name}</h1>
              </div> */}
            </li>
          ))
        ) : (
          <p>No cryptocurrencies available</p>
        )}
      </ul>
    </div>
  );
}

export default CoinsList;
