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
      <main className="flex min-h-screen justify-between dark:bg-gray-600 p-4">
        <h1 className="text-4xl font-bold dark:text-white">Me and You!</h1>
        {/* <button onClick={toggleMode} className="bg-black  dark:bg-white text-white  dark:text-black font-bold py-2 px-4 rounded"> {darkMode ? "Light" : "Dark"} </button> */}

        <div>
          <input onClick={toggleMode} type="checkbox" className="peer sr-only opacity-0" id="toggle" />
          <label htmlFor="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-black peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500" >
            <span className="sr-only">Enable</span>
          </label>
        </div>
      </main>
    </div>

  );
}
