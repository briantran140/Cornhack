"use client";
import Chart from "./components/chart";

export default function Home() {
  return (
    <>
      <div className="content">
        <div className="hero">
          <div className="chart">
            <Chart />
          </div>
          <div className="blurb">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            libero esse nam et quibusdam, enim nobis ullam earum officiis?
            Tenetur, repudiandae dolorum repellendus accusantium animi dolorem
            nihil facere eligendi sint.
          </div>
        </div>
        <div className="mission">
          <h3 className="head">Our Mission</h3>
          <p>
          Student Support Net is to empower individuals to beat
          the odds and thrive in their mental health journey. In a world where
          the challenges of everyday life can sometimes feel insurmountable, we
          believe in providing a supportive online platform where college
          students can find solace, connection, and resources to navigate their
          mental health struggles. By fostering a community of empathy,
          understanding, and resilience, we aim to break down barriers,
          challenge stigma, and inspire hope. Together, we strive to create a
          space where every individual feels valued, supported, and equipped
          with the tools they need to overcome adversity and embrace their full
          potential.
          </p>
        </div>
      </div>
    </>
  );
}
