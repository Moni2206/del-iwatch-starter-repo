const Heading = () => {
  return (
    <div>
      <ul
        className="
          flex flex-wrap justify-center
          gap-4 sm:gap-6 md:gap-8
          text-center
          text-base sm:text-lg md:text-xl
          font-bold
        "
      >
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li className="bg-white px-4 py-1 rounded-full text-[#BDD3DF]">iWatch</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Heading;
