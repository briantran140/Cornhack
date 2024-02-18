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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
