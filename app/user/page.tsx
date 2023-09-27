import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserPage() {
  return (
    <div className="flex">
      <div className="">
        UserInfo
        <div>Name: </div>
        <div>Username: </div>
        <div>Date joined: </div>
        <div>Last Login: </div>
        <div>Points collected: </div>
        <div>Points redeemed: </div>
        <div>Prizes collected: </div>
      </div>
      <div>
        UserManager
        <div>Edit account information</div>
        <div>Delete accuont</div>
      </div>
    </div>
  );
}

export default UserPage;
