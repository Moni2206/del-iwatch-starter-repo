"use client";

import Image from "next/image";
import { useState } from "react";
import Heading from "./components/Heading";

import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

export default function Home() {
  const [watch, setWatch] = useState("/navy.png");

  return (
    <main className="bg-[#BDD3DF] min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-4 text-white">
        <Heading />

        <div className="flex gap-8">
          <CiSearch size={30} />
          <FiShoppingBag size={30} />
        </div>
      </nav>

      {/* HERO */}
      <section className="flex items-center justify-between px-16 py-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold text-white leading-tight">The Perfect Moment</h1>
          <h2 className="text-5xl text-white/80 mt-4">Between Past And Future.</h2>

          <button className="mt-10 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">Buy Now</button>
        </div>

        <div className="relative">
          {/* ur billedet*/}
          <Image src={watch} width={400} height={400} alt="watch" className="drop-shadow-2xl" priority />

          {/* faver */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
            <button onClick={() => setWatch("/navy.png")} className="w-6 h-6 rounded-full bg-black border-2"></button>

            <button onClick={() => setWatch("/mint.png")} className="w-6 h-6 rounded-full bg-green-400 border-2"></button>

            <button onClick={() => setWatch("/ocean.png")} className="w-6 h-6 rounded-full bg-[#cfdee4]"></button>
          </div>
        </div>
      </section>

      <section className="flex justify-center gap-6 pb-10">
        <button onClick={() => setWatch("/navy.png")}>
          <Image src="/navy.png" width={100} height={100} alt="watch" />
        </button>

        <button onClick={() => setWatch("/mint.png")}>
          <Image src="/mint.png" width={100} height={100} alt="watch" />
        </button>

        <button onClick={() => setWatch("/ocean.png")}>
          <Image src="/ocean.png" width={100} height={100} alt="watch" />
        </button>
      </section>
    </main>
  );
}

// import Image from "next/image";
// import Heading from "./components/Heading";
// import { FaApple } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { FiShoppingBag } from "react-icons/fi";

// export default function Home() {
//   return (
//     <>
//       <Heading />
//       <FaApple size={70} />
//       <CiSearch size={40} />
//       <FiShoppingBag size={40} />

//       <main>
//         <section>
//           <div>
//             <div>
//               <h1>The Perfect Moment Between Past And Future.</h1>
//             </div>

//             <div>{/* knap */}</div>
//           </div>

//           <div>
//             <div>
//               <Image src="/mint.png" width={500} height={500} alt="Picture of watch" priority />
//             </div>
//             <div>{/* farve knapper */}</div>
//           </div>
//         </section>

//         <section>
//           <div>
//             <div>
//               <Image src="/navy.png" width={100} height={100} alt="watch" />
//               <Image src="/mint.png" width={100} height={100} alt="watch" />
//               <Image src="/ocean.png" width={100} height={100} alt="watch" />
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
