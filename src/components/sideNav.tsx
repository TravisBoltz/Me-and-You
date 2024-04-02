import React from "react";
import Image from "next/image";
const Chat = () => {
  return (
    <section className="flex border-b-slate-600  items-center py-2 justify-evenly ">
      <img alt="profile picture" width={120} height={120}
        className="h-12 w-12 rounded-full"
        src={"https://random.imagecdn.app/500/150"}
      />
      <span className="dark:text-white">User Name</span>
    </section>
  )
}

const SideBar = () => {

  return <main>
    <nav className="dark:bg-gray-800 bg-white border-r-slate-600 border-r-4 w-64 h-screen">
      <section className="flex border-b-slate-600 border-b-4 items-center py-2 justify-evenly ">
        <img alt="profile picture" width={120} height={120}
          className="h-12 w-12 rounded-full"
          src={"https://random.imagecdn.app/500/150"}
        />
        <span className="dark:text-white">User Name</span>
      </section>
      <button className=" mt-2 flex items-center mx-auto justify-center bg-gray-400 rounded-md px-14 text-white font-bold py-2">Add Chat</button>
      {/* useless */}
      <section className="flex flex-col  overflow-none">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />


      </section >
    </nav>
  </main>;
};

export default SideBar;
