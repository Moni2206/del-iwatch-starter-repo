"use client";

import { useState } from "react";
import Heading from "./components/Heading";
import Text from "./components/Text";
import Watch from "./components/Watch";
import Color from "./components/Color";

import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  const [watch, setWatch] = useState("/navy.png");
  // const [watch (styer det stor billedet ), setWatch] = useState("/navy.png");

  return (
    <main className="bg-[#BDD3DF] min-h-screen px-16 py-6">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center text-white">
        <FaApple size={50} />
        <Heading />

        <div className="flex gap-8">
          <CiSearch size={30} />
          <FiShoppingBag size={30} />
        </div>
      </nav>

      {/* HERO */}
      <section className="flex items-center justify-between py-10">
        <Text />
        <Watch currentWatch={watch} />
      </section>

      {/* COLORS */}
      <Color setWatch={setWatch} />
    </main>
  );
}
