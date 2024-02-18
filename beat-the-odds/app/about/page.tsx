import React from "react";
import Image from "next/image";
import anon from "../images/missing-photo.png";
import { Inter, Noto_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"] });

const members = [
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "\"I am a proud advocate for mental health awareness. As a college student that suffers from anxiety, depression, and OCD, I know firsthand just how important it can be to seek the proper help. It isn’t easy asking for help, but it made so much of a difference in my journey with learning how to cope and live more comfortably.\"",
  },
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "\"The way I try to maintain good mental health is by always having myself surrounded by people that I know like my friends and family, so I constantly interact with them as much as possible so I don't feel lonely. When I am lonely I feel like I get into a bad mental space and forget about important aspects of life I need to focus to stay disciplined and successful. But as a college student who is an upper-class man, it is hard to find coherent times to spend with your close ones due to everybody's varying schedules. That is why getting mental help is very important so you have somebody to speak to about your problems and other aspects by catering to your time to keep you on track and maintain a good mental well-being.\"",
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
      <div className="jonah-spacer"></div>
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
