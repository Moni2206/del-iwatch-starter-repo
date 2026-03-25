"use client"; // vigtig hvis der er interaktive elementer
import Image from "next/image";

const Watch = ({ currentWatch }) => {
  return (
    <div className="relative">
      <Image src={currentWatch} width={400} height={400} alt="watch" className="drop-shadow-2xl" />
    </div>
  );
};

export default Watch;
