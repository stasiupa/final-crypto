import React from "react";

function Footer() {
  return (
    <div className="text-green-600 bg-black ">
      <div className="text-center">Created by: ASAPRATAJ & stasiupa</div>
      <div className="flex justify-around my-4">
        <div>
          Contact
          <div className="my-4">
            <div>Telefon</div>
            <div>Email</div>
            <div>Social</div>
          </div>
        </div>
        <div>
          Other Projects
          <div className="my-4">
            <div> IceCream Warehouse</div>
            <div>React Quiz</div>
            <div>ASAPRATAJ Projects</div>
          </div>
        </div>
        <div>
          Pozdrowienia
          <div>do więzienia</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
