import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-black h-64 mt-32 flex items-center justify-center">
      <div className="text-gray-400 text-sm font-light pt-16">
        © {new Date().getFullYear()}
          &nbsp;
          <a className="text-white" href="https://www.lassekrarup.com">Lasse Krarup</a>
      </div>
    </footer>
  );
}

export default Footer;
