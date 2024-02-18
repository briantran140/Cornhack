"use client";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center mb-4 p-4 header fixed w-full top-0 z-50"
      style={{ backgroundColor: "var(--green)" }}
    >
      <a href="/" className="logo-container">
        <img src="/favicon.ico" alt="Favicon" className="h-11 mr-2" />
        <h1 className="logo-name">StudentSupportNet</h1>
      </a>

      <div className="link-container">
        <a href="/about" className="link">
          About Us
        </a>
        <a href="/support" className="btn">
          Get Support
        </a>
      </div>
    </header>
  );
}
