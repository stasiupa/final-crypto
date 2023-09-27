import React from "react";

function LandingPage() {
  return (
    <div>
      <div>
        <section className="relative w-auto min-w-full min-h-full max-w-none object-cover">
          <video
            className=""
            autoPlay
            loop
            muted
            id="background-coin"
            src="background-coin.mp4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
            Welcome to our Final-Crypto Website! <br />
            <span className="">
              A place where You can vote for the best performing
              cryptocurrencies and redeem collected points for amazing prizes!
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
