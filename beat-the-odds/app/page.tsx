"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import Chart from "./components/chart";


export default async function Home() {
  return <>
    <Header/>
    <div className="content">
      <div className="hero">
        <div className="chart"><Chart/></div>
        <div className="blurb">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet libero esse nam et quibusdam, enim nobis ullam earum officiis? Tenetur, repudiandae dolorum repellendus accusantium animi dolorem nihil facere eligendi sint.</div>
      </div>
    </div>
    <Footer/>
  </>
}
