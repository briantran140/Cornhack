import React from 'react';
import Image from 'next/image';
import UNO from '../images/UNOLogo.png';
import UNL from '../images/UNLLogo.png';
import UNK from '../images/UNKLogo.png';
import Chadron from '../images/Chadron.png';
import UNMC from '../images/UNMC.png';
import Wayne from '../images/Wayne.png';
import Peru from '../images/Peru.png';
import Creighton from '../images/Bellevue.png';
import Doane from '../images/Chadron.png';
import Hastings from '../images/Clarkson.png';
import Wesleyan from '../images/Concordia.png';
import Bellevue from '../images/Bellevue.png';
import Clarkson from '../images/Creighton.png';
import Midland from '../images/Hastings.png';
import York from '../images/Midland.png';
import SaintMary from '../images/SaintMary.png';
import Methodist from '../images/Methodist.png';
import Concordia from '../images/York.png';


const colleges = [
  {
    name: "University of Nebraska Omaha",
    image: UNO,
    url: "https://www.unomaha.edu/student-life/wellness/counseling-and-psychological-services/index.php",
  },
  {
    name: "University of Nebraska-Lincoln",
    image: UNL,
    url: "https://caps.unl.edu/",
  },
  {
    name: "University of Nebraska at Kearney",
    image: UNK,
    url: "https://www.unk.edu/offices/counseling_healthcare/index.php",
  },
  {
    name: "Chadron State College",
    image: Chadron,
    url: "https://www.csc.edu/healthserv/counseling--medical-services/",
  },
  {
    name: "University of Nebraska Medical Center",
    image: UNMC,
    url: "https://www.unmc.edu/student-success/support-services/counseling/index.html",
  },
  {
    name: "Wayne State College",
    image: Wayne,
    url: "https://www.wsc.edu/info/20020/student_health_and_counseling",
  },
  {
    name: "Peru State College",
    image: Peru,
    url: "https://www.peru.edu/counseling/",
  },
  {
    name: "Creighton University",
    image: Creighton,
    url: "https://www.creighton.edu/student-experience/wellness/health-and-counseling/student-counseling-services",
  },
  {
    name: "Doane University",
    image: Doane,
    url: "https://web.doane.edu/offices-services/student-services/student-health/counseling",
  },
  {
    name: "Hastings College",
    image: Hastings,
    url: "https://www.hastings.edu/student-life/health-safety-wellness/student-counseling/",
  },
  {
    name: "Nebraska Wesleyan University",
    image: Wesleyan,
    url: "https://www.nebrwesleyan.edu/inside-nwu/personal-counseling",
  },
  {
    name: "Bellevue University",
    image: Bellevue,
    url: "https://www.bellevue.edu/student-support/center-for-health-and-safety/counseling-services",
  },
  {
    name: "Clarkson College",
    image: Clarkson,
    url: "https://www.clarkson.edu/student-life/student-health-and-counseling-services",
  },
  {
    name: "Midland University",
    image: Midland,
    url: "https://www.midlandu.edu/student-resources/counseling-services/",
  },
  {
    name: "York College",
    image: York,
    url: "https://www.york.edu/student-life-office/counseling-services.php",
  },
  {
    name: "College of Saint Mary",
    image: SaintMary,
    url: "https://www.csm.edu/student-life/health-wellness",
  },
  {
    name: "Nebraska Methodist College",
    image: Methodist,
    url: "https://www.methodistcollege.edu/counseling-services",
  },
  {
    name: "Concordia University",
    image: Concordia,
    url: "https://www.cune.edu/today/students/health-wellness/mental-health-resources",
  },
];

const CollegeTile = ({ name, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', position: 'relative' }}>
      <div style={{ width: '200px', height: '200px', margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Image src={image} alt={name} width={175} height={175} />
      </div>
      <div style={{ position: 'absolute', bottom: '-8px', left: '0', right: '0', height: '8px' }}></div>
    </a>
  );
};

const Support = () => {
  return (
    <>
      <div className="jonah-spacer"></div>
      <h1 className="text-6xl italic text-black" style={{ textAlign: 'center' }}>Get Support From Your College</h1>
      <div className="flex flex-wrap justify-center">
        {colleges.map(college => (
          <CollegeTile key={college.name} name={college.name} image={college.image} url={college.url} />
        ))}
      </div>
    </>
  );
};

export default Support;
