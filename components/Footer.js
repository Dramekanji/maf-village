import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <img
            src="/images/maf-logo.png"
            alt="Maf Logo"
            width={100}
            height={50}
          />
        </Link>
        <div className="mt-8">Copyright &copy; 2023. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
