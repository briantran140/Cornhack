// components/footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { Inter, Noto_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`bg-gray-800 text-black py-8 ${inter.className}`} style={{ backgroundColor: 'var(--green)', color: 'var(--white)' }}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <Link legacyBehavior href="/">
            <a className="text-xl font-bold tracking-wide uppercase mr-6 hover:underline">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-xl font-bold tracking-wide uppercase mr-6 hover:underline">About Us</a>
          </Link>
          <Link legacyBehavior href="/support">
            <a className="text-xl font-bold tracking-wide uppercase hover:underline">Resources</a>
          </Link>
         
        </div>
        <div className="flex mb-4">
          <Link legacyBehavior href="/privacy-policy">
            <a className="text-sm mr-6">Privacy Policy</a>
          </Link>
          <Link legacyBehavior href="/terms-of-service">
            <a className="text-sm">Terms of Service</a>
          </Link>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-xl"><FaFacebook /></a>
          <a href="#" className="text-xl"><FaTwitter /></a>
          <a href="#" className="text-xl"><FaInstagram /></a>
        </div>
        <p className="text-sm">© 2024 Student Support Net. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
