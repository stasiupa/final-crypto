import Link from "next/link";
import React from "react";

import { BiLogInCircle } from "react-icons/bi";
import { AiFillGift, AiTwotoneHome } from "react-icons/ai";
import { MdHowToVote, MdManageAccounts } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";

function Navbar() {
  return (
    <nav>
      <ul className="flex p-5 justify-around text-green-600  font-bold text-2xl relative bg-black ">
        <li>
          <Link href="/" className="flex items-center hover:underline">
            <AiTwotoneHome className="mr-1" />
            HomePage
          </Link>
        </li>
        <li>
          <Link href="/user" className="flex items-center hover:underline">
            <MdManageAccounts className="mr-1" />
            My account
          </Link>
        </li>
        <li>
          <Link href="/coin-list" className="flex items-center hover:underline">
            <FaCoins className="mr-1" />
            Crypto currencies
          </Link>
        </li>
        <li>
          <Link href="/vote" className="flex items-center hover:underline">
            <MdHowToVote className="mr-1" />
            Vote
          </Link>
        </li>
        <li>
          <Link href="/redeem" className="flex items-center hover:underline">
            <AiFillGift className="mr-1" />
            Redeem coins
          </Link>
        </li>
        <li>
          <Link href="/login" className="flex items-center hover:underline">
            <BiLogInCircle className="mr-1" /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
