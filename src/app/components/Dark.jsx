import React, { useState } from "react";

const DarkModeToggle = () => {
  // State for dark mode
  const [dark, setDark] = useState(false);
  // State for button text
  const [text, setText] = useState("Dark Mode");

  const toggleDarkMode = () => {
    setDark(!dark);
    setText(dark ? "Dark Mode" : "Light Mode");
  };

  return (
    <div className={dark ? "bg-black text-white min-h-screen flex items-center justify-center" : "bg-white text-black min-h-screen flex items-center justify-center"}>
      <button onClick={toggleDarkMode} className="px-4 py-2 rounded-full border border-gray-500">
        {text}
      </button>
    </div>
  );
};

export default DarkModeToggle;
