import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 text-center text-muted-foreground bg-transparent">
      <div className="mb-2 text-sm">© {year} Saurabh Sharma. All rights reserved.</div>
      <div className="text-xs">Made with 💻, ☕ and a passion for innovation.</div>
    </footer>
  );
};

export default Footer;
