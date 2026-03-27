import Image from "next/image";
const Color = () => {
  return (
    <section className="flex gap-4 justify-end ">
      <div className=" bg-[#757F8F] rounded-lg ">
        <button>
          <Image src="/navy.png" width={100} height={100} alt="watch" />
        </button>
      </div>

      <button className="p-1 bg-[#8DDAD4] rounded-lg">
        <Image src="/mint.png" width={100} height={100} alt="watch" />
      </button>

      <button className=" p-1 bg-[#bfdbe6] rounded-lg">
        <Image src="/ocean.png" width={100} height={100} alt="watch" />
      </button>
    </section>
  );
};

export default Color;
