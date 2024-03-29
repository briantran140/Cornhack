"use client";
import "./styles.css";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import anon from "../images/missing-photo.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.75,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.75,
    },
  },
};


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
    desc: "\"As a college student grappling with anxiety, feeling low, and battling my own thoughts, I've come to realize the vital importance of reaching out for support. It's not always easy, but I've learned firsthand how crucial it is to talk about mental health struggles and ask for help when needed. Despite the busyness of college life and the difficulty in trusting others, I've discovered the immense value in leaning on my family and seeking guidance from professionals who truly understand what I'm going through. While hitting the gym or going for a ride on my motorcycle provides temporary relief, I've learned that addressing my problems head-on is essential for long-term well-being. Despite having a small social circle, I'm committed to prioritizing self-care and actively seeking support when life feels overwhelming.\"",
  },
  {
    image: anon,
    name: "Anonymous",
    major: "Computer Science",
    desc: "\"I am a computer science major navigating the challenges of college life while dealing with my own share of mental health issues. Although my personal journey might not be as straightforward, I've come to realize the transformative power of seeking support. It's easy to feel overwhelmed and isolated, but reaching out for help has been a game-changer for me. I've learned to prioritize self-reflection, embracing both the highs and lows. While college can be demanding, I've found solace in connecting with peers who understand the struggles. Mental health isn't a linear path, but with the right support, I've discovered resilience and a sense of empowerment. I encourage every student to break the stigma, embrace vulnerability, and embark on a journey of self-discovery and growth.\"",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === members.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="jonah-spacer"></div>
      <div className={`page-header `}>Our Testimonials</div>
      <div className="content">
        <div className="container">
          <div className="team">
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={currentIndex}
              className="member"
            >
              <Image
                className="image"
                src={members[currentIndex].image}
                alt="anonymous"
              ></Image>
              <div className="name">{members[currentIndex].name}</div>
              <div className="major">{members[currentIndex].major}</div>
              <div className={`desc ${inter.className}`}>
                {members[currentIndex].desc}
              </div>
            </motion.div>
            <button className="prev-btn" onClick={goToPrevMember}>
              <span>&#8592;</span>
            </button>
            <button className="next-btn" onClick={goToNextMember}>
              <span>&#8594;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="alt-spacer"></div>
      <br></br>
    </>
  );
};

export default About;
