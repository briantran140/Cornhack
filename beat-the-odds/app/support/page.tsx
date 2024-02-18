import React from 'react';
import Image from 'next/image';
import UNO from '../images/UNOLogo.png';
import UNL from '../images/UNLLogo.png';
import UNK from '../images/UNKLogo.png';

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

const Support = () => {
  return (
    <>
      <div className="jonah-spacer"></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {colleges.map(college => (
          <CollegeTile key={college.name} name={college.name} image={college.image} url={college.url} />
        ))}
      </div>
    </>
  );
};

export default Support;
