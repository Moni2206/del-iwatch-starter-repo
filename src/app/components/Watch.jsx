import Image from "next/image";

const Watch = ({ currentWatch }) => {
  return (
    <div className="relative">
      {/* ur billedet*/}
      <Image src="/navy.png" width={400} height={400} alt="watch" className="drop-shadow-2xl" priority />

      {/* faver */}
      <div className="absolute right-[3px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button className="w-6 h-6 rounded-full bg-black border-2"></button>

        <button className="w-6 h-6 rounded-full bg-[#56d6c2] border-2"></button>

        <button className="w-6 h-6 rounded-full bg-[#cfdee4] border-2"></button>
      </div>
    </div>
  );
};

export default Watch;
