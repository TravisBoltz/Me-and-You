import React from "react";
import Image from "next/image";
import { auth } from "@/dbConfig/firebase"
import { signOut } from "firebase/auth";
const Chat = () => {
  return (
    <section className="flex border-b-slate-600 items-center py-2 justify-evenly">
      <img
        alt="profile picture"
        width={120}
        height={120}
        className="h-12 w-12 rounded-full"
        src={"https://random.imagecdn.app/500/150"}
      />
      <span className="dark:text-white">User Name</span>
    </section>
  );
};

const SideBar = () => {
  return (
    <main style={{ height: "100vh" }}>
      <nav className="dark:bg-gray-800 bg-white border-r-slate-600 border-r-4 w-64 h-full">
        <section className="flex border-b-slate-600 border-b-4 items-center py-2 justify-evenly">
          <img
            alt="profile picture"
            width={120}
            height={120}
            className="h-12 w-12 rounded-full"
            src={"https://random.imagecdn.app/500/150"}
          />
          <span className="dark:text-white">User Name</span>
          <button className="text-white bg-gray-800 p-2 rounded-xl" onClick={() => signOut(auth)}>SignOut</button>
        </section>
        <button className="mt-2 flex items-center mx-auto justify-center bg-gray-400 rounded-md px-14 text-white font-bold py-2">
          Add Chat
        </button>
        <div className="overflow-y-auto h-full" style={{ maxHeight: "calc(100vh - 150px)" }}>
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </div>
      </nav>
    </main>
  );
};

export default SideBar;
