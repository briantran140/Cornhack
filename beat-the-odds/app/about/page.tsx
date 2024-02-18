import React from "react";
import Image from "next/image";
import anon from "../missing-photo.png";
import { Inter, Noto_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"] });

const members = [
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "\"I am a proud advocate for \"",
  },
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "",
  },
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "",
  },
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "",
  },
];

const About = () => {
  return (
    <>
      <div className="alt-spacer"></div>
      <div className={`page-header `}>Our Testimonials</div>
      <div className="content">
        <div className="container">
          <div className="team">
            {members.map((member, index) => (
              <div key={index} className="member">
                <Image
                  className="image"
                  src={member.image}
                  alt="anonymous"
                ></Image>
                <div className="name">{member.name}</div>
                <div className="major">{member.major}</div>
                <div className={`desc ${inter.className}`}>{member.desc}</div>
                <div className="alt-spacer"></div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
