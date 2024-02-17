"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "./Components/header";
import Chart from "./Components/chart";

export default async function Home() {
  return <>
  <header>
    <Header/>
    <Chart/>
  </header>
  </>
    
}
