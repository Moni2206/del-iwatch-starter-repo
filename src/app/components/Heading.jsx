import { FaApple } from "react-icons/fa";

const Heading = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 text-white">
      <ul className="flex gap-10 text-align-center text-xl font-bold">
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li className="bg-white px-4 py-1 rounded-full text-[#BDD3DF]">iWatch</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Heading;
