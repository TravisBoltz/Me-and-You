// Import necessary libraries
import React, { useState } from "react";
import Image from "next/image";
import { auth } from "@/dbConfig/firebase"
import { signOut } from "firebase/auth";

// Define the props for the Chat component
interface ChatProps {
  isExpanded: boolean;
}

// Define the Chat component
const Chat: React.FC<ChatProps> = ({ isExpanded }) => {
  return (
    // Add a hover effect to the chat items
    <section className={`flex items-center py-2 justify-evenly ${isExpanded ? 'border-b-slate-600' : ''} transition-all duration-200 ease-in-out`}>
      {/* // Display the user's profile picture */}
      <img
        alt="profile picture"
        width={120}
        height={120}
        className="h-12 w-12 rounded-full"
        src={"https://random.imagecdn.app/500/150"}
      />
      {/* // Display the user's name when the sidebar is expanded */}
      {isExpanded && <span className="dark:text-white">User Name</span>}
    </section>
  );
};


// Define the SideBar component
const SideBar: React.FC = () => {
  // Define a state to track whether the sidebar is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Define a function to toggle the isExpanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setIsFixed(!isExpanded);
  };

  return (
    // Expand the sidebar when the mouse enters it and collapse it when the mouse leaves it
    <main style={{ height: "100vh" }} onMouseEnter={() => !isFixed && setIsExpanded(true)} onMouseLeave={() => !isFixed && setIsExpanded(false)}>      <nav className={`dark:bg-gray-800 bg-white border-r-slate-600 border-r-4 ${isExpanded ? 'w-64' : 'w-16'} h-full transition-all duration-200 ease-in-out`}>
      {/* // Display the user's profile picture, name, and a sign-out button when the sidebar is expanded */}
      <section className={`flex items-center py-2 justify-evenly ${isExpanded ? 'border-b-slate-600 border-b-4' : ''} border-b-slate-600 border-b-4 transition-all duration-200 ease-in-out`}>
        <img
          alt="profile picture"
          width={120}
          height={120}
          className="h-12 w-12 rounded-full"
          src={"https://random.imagecdn.app/500/150"}
        />
        {isExpanded && <span className="dark:text-white">User Name</span>}
        {isExpanded && <button className="text-white bg-gray-800 p-2 rounded-xl" onClick={() => signOut(auth)}>SignOut</button>}
      </section>
      {/* // Display a button to add a new chat when the sidebar is expanded */}
      {isExpanded && <button className="mt-2 flex items-center mx-auto justify-center bg-gray-400 rounded-md px-14 text-white font-bold py-2">
        Add Chat
      </button>}
      {/* Add a button to toggle the isExpanded state */}

      <button className="bg-gray-600 text-white" onClick={toggleExpanded}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {/* // Display the list of chats */}
      <div className="overflow-y-auto h-full" style={{ maxHeight: "calc(100vh - 150px)" }}>
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
        <Chat isExpanded={isExpanded} />
      </div>
    </nav>
    </main>
  );
};

// Export the SideBar component
export default SideBar;
