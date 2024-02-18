"use client";

import { useEffect } from "react";
import { useHealthContext } from "../context/healthContext";

export default function Header() {
  const { topics, myHealthFinder, itemList } = useHealthContext();

  useEffect(() => {
    console.log(topics);
    console.log(myHealthFinder);
    console.log(itemList);
  }, [topics, myHealthFinder, itemList]);

  return (
    <header
      className="flex justify-between items-center mb-4 p-4 header fixed w-full top-0 z-50"
      style={{ backgroundColor: "var(--green)" }}
    >
      <div className="flex">
        <img src="/favicon.ico" alt="Favicon" className="h-11 mr-2" />
        <h1 className="text-3xl text-black">StudentSupportNet</h1>
      </div>
      <div className="flex">
        <a href="/" className="mr-4 text-black px-4 py-2">
          Services
        </a>
        <a
          href="/"
          className="border border-black text-black px-4 py-2 rounded hover:bg-green-700 focus:bg-green-700"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
