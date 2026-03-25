const [watch] = useState("/navy.png");
const Text = () => {
  return (
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

          <button onClick={() => setWatch("/ocean.png")} className="w-6 h-6 rounded-full bg-[#cfdee4] border-2"></button>
        </div>
      </div>
    </section>
  );
};

export default Text;
