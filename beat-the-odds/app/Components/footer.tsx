// components/footer.tsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black py-8" style={{ backgroundColor: 'var(--green)' }}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4">
          <Link legacyBehavior href="/">
            <a className="text-xl font-bold tracking-wide uppercase mr-6">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-xl font-bold tracking-wide uppercase mr-6">About Us</a>
          </Link>
          <Link legacyBehavior href="/resources">
            <a className="text-xl font-bold tracking-wide uppercase mr-6">Resources</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="text-xl font-bold tracking-wide uppercase">Contact</a>
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