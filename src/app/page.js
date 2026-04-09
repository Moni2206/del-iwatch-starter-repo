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
  const [dark, setDark] = useState(false); // dark mode state
  const [buttonText, setButtonText] = useState("Dark Mode"); // button text state

  const toggleDarkMode = () => {
    setDark(!dark);
    setButtonText(!dark ? "Light Mode" : "Dark Mode");
  };

  return (
    <main className={dark ? "dark bg-gray-900 min-h-screen px-8 md:px-10 lg:px-12 xl:px-20 py-6 relative" : "bg-[#BDD3DF] min-h-screen px-8 md:px-10 lg:px-12 xl:px-20 py-6 relative"}>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center text-black dark:text-white">
        <FaApple size={40} className="" />
        <Heading />

        <div className="flex gap-8">
          <CiSearch size={30} />
          <FiShoppingBag size={30} />
        </div>
      </nav>

      {/* TOGGLE BUTTON */}
      <div className="my-4">
        <button onClick={toggleDarkMode} className=" text-black dark:text-white px-4 py-2 rounded-full border border-gray-500 ">
          {buttonText}
        </button>
      </div>

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
