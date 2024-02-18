"use client"
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import UNO from '../images/UNOLogo.png';
import UNL from '../images/UNLLogo.png';
import UNK from '../images/UNKLogo.png';

import SupportElement, { supportPage } from './supportElement'; // Assuming Support component is in the same directory
import { useHealthContext } from '../context/healthContext';

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

const CollegeTile = ({ name, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', position: 'relative' }}>
      <div style={{ width: '200px', height: '200px', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Image src={image} alt={name} width={175} height={175} />
      </div>
      <div style={{ position: 'absolute', bottom: '-8px', left: '0', right: '0', height: '8px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%)' }}></div>
    </a>
  );
};

const options = 
  [
    { id: "531", title: "Get Screened" },
    { id: "30533", title: "Get Enough Sleep" },
    { id: "30537", title: "Get Your Cholesterol Checked" },
    { id: "30538", title: "Choose the Right Birth Control" },
    { id: "30539", title: "Eat Healthy" },
    { id: "30540", title: "Get Your Well-Woman Visit Every Year" },
    { id: "30541", title: "Men: Take Charge of Your Health" },
    { id: "30546", title: "Take Steps to Prevent Type 2 Diabetes" },
    { id: "30547", title: "Get Active" },
    { id: "30558", title: "Drink Alcohol Only in Moderation" },
    { id: "30560", title: "Manage Stress" },
    { id: "30588", title: "Quitting Smoking: Conversation Starters" },
    { id: "30604", title: "Depression: Conversation Starters" },
    { id: "30606", title: "Alcohol Use: Conversation Starters" },
    { id: "30610", title: "Quit Smoking" },
    { id: "30614", title: "Testing for Syphilis: Questions for the Doctor" },
    { id: "33303", title: "Talk with Your Doctor About Drug Misuse" },
    { id: "33304", title: "Drug Misuse: Conversation Starters" },
    { id: "34691", title: "Get Your Child Screened for Anxiety" },
    { id: "34692", title: "Anxiety: Conversation Starters" }
  ];


export default function Support(){
  const { topics, myHealthFinder, itemList } = useHealthContext();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected option:", selectedOption);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    console.log(topics);
    // console.log(myHealthFinder);
    // console.log(itemList);
  }, [topics, myHealthFinder, itemList]);
  return (
    <>
      <div className="jonah-spacer"></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {colleges.map(college => (
          <CollegeTile key={college.name} name={college.name} image={college.image} url={college.url} />
        ))}
      </div>

      <div className="mt-20">
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
          <select name="title" value={selectedOption} onChange={handleSelectChange} className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-with:border-slate-100">
            <option value="">Select...</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>{option.title}</option>
            ))}
          </select>
          <div className="flex gap-1 justify-end">
            <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Submit</button>
          </div>
        </form>
      <SupportElement
        title="Support Title"
        link="https://www.amazon.com/"
        imageUrl="https:\/\/health.gov\/sites\/default\/files\/2023-03\/Teen-screen-depression_1194319414.jpg"
      />
      {/* <SupportElement
        key={index}
        title={resources.title}
        Link={resources.url}
        imageUrl="https://example.com/image.jpg"
      /> */}
    </div>
    </>
  );
};
   
