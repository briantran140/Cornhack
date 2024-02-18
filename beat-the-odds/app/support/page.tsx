"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import UNO from "../images/UNOLogo.png";
import UNL from "../images/UNLLogo.png";
import UNK from "../images/UNKLogo.png";
import { topicList } from "../interfaces/topicData";

import SupportElement, { supportPage } from "./supportElement"; // Assuming Support component is in the same directory
import { useHealthContext } from "../context/healthContext";

interface ICollege {
  name: string;
  image: StaticImageData;
  url: string;
}
const colleges = [
  {
    name: "University of Nebraska - Omaha",
    image: UNO,
    url: "https://www.unomaha.edu/student-life/wellness/counseling-and-psychological-services/index.php",
  },
  {
    name: "University of Nebraska - Lincoln",
    image: UNL,
    url: "https://caps.unl.edu/",
  },
  {
    name: "University of Nebraska - Kearney",
    image: UNK,
    url: "https://www.unk.edu/offices/counseling_healthcare/index.php",
  },
];

const CollegeTile = ({ name, image, url }: ICollege) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        textAlign: "center",
        textDecoration: "none",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Image src={image} alt={name} width={175} height={175} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-8px",
          left: "0",
          right: "0",
          height: "8px",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%)",
        }}
      ></div>
    </a>
  );
};

export default function Support() {
  const { topics, handleTopicId } = useHealthContext();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    handleTopicId(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="jonah-spacer"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {colleges.map((college) => (
          <CollegeTile
            key={college.name}
            name={college.name}
            image={college.image}
            url={college.url}
          />
        ))}
      </div>

      <div className="mt-20 ml-10 mr-10">
        <form className="flex gap-2 mb-5">
          <h1>Category: </h1>
          <select
            name="title"
            value={selectedOption}
            onChange={handleSelectChange}
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100"
          >
            <option value="">Select...</option>
            {topicList.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
        </form>
        <ul className="mb-10">
          {topics.map((topic) => (
            <SupportElement
              key={topic.Id}
              title={topic.Title}
              link={topic.AccessibleVersion}
              imageUrl={topic.ImageUrl}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
