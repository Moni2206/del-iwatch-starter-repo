"use client";
import Image from "next/image";

const Color = ({ setWatch }) => {
  return (
    <div>
      <div className="absolute right-[3px] top-1/2 -translate-y-1/2 flex flex-col gap-3 pr-13 pb-37">
        <button onClick={() => setWatch("/navy.png")} className="w-6 h-6 rounded-full bg-black border-2"></button>
        <button onClick={() => setWatch("/mint.png")} className="w-6 h-6 rounded-full bg-[#56d6c2] border-2"></button>
        <button onClick={() => setWatch("/ocean.png")} className="w-6 h-6 rounded-full bg-[#cfdee4] border-2"></button>
      </div>

      <section className="flex gap-4 justify-end mt-6">
        <button onClick={() => setWatch("/navy.png")} className="bg-[#757F8F] rounded-lg p-1">
          <Image src="/navy.png" width={100} height={100} alt="watch" />
        </button>

        <button onClick={() => setWatch("/mint.png")} className="bg-[#8DDAD4] rounded-lg p-1">
          <Image src="/mint.png" width={100} height={100} alt="watch" />
        </button>

        <button onClick={() => setWatch("/ocean.png")}>
          <div className="bg-[#bfdbe6] rounded-lg p-1">
            <Image src="/ocean.png" width={100} height={100} alt="watch" />
          </div>
        </button>

        {/* <button onClick={() => setWatch("/ocean.png")}>
          <div
            style={{
              content: "",
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: 1,
              height: "10px",
              width: "40%",
              backgroundColor: "#bfdbe6",
              borderradius: "10px",
            }}
          >
            <Image src="/ocean.png" width={100} height={100} alt="watch" />
          </div>
        </button> */}
      </section>
    </div>
  );
};

export default Color;
