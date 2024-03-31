'use client';
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  }
  // const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className={`${darkMode && "dark"} `}>
      <main className="flex min-h-screen  flex-col items-center dark:bg-gray-600 justify-between p-24">
        <h1 className="text-4xl font-bold dark:text-white">Me and You!</h1>
        <button onClick={toggleMode} className="bg-black  dark:bg-white text-white  dark:text-black font-bold py-2 px-4 rounded"> {darkMode ? "Light" : "Dark"} </button>
      </main>
    </div>
  );
}
