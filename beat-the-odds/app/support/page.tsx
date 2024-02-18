import React from 'react';
import Image from 'next/image';
import UNO from '../images/UNOLogo.png';
import UNL from '../images/UNLLogo.png';
import UNK from '../images/UNKLogo.png';

import SupportElement, { supportPage } from './supportElement'; // Assuming Support component is in the same directory
import { dummyData } from './dummyData';

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

export default function Support(){
  //const resources: Array<supportPage> = dummyData.Resources.Resource;
  return (
    <>
      <div className="jonah-spacer"></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {colleges.map(college => (
          <CollegeTile key={college.name} name={college.name} image={college.image} url={college.url} />
        ))}
      </div>

      <div className="mt-20">
      <form className="flex gap-2 flex-col">
        <input type="text" name="title" 
        className="border border-slate-300 bg-transparent rounded px-2 py-1
        outline-none focus-with:border-slate-100"/>
          <div className="flex gap-1 justify-end">
            <button type="submit" 
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded 
                      hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >Submit</button>
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
   
