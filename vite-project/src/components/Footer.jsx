import React from 'react';

const Footer = () => {
  return (
    <div className="mt-30 h-20 flex flex-wrap justify-center items-center gap-6 bg-blue-100 p-4">
      <div>
        📲 Follow us on Facebook:{' '}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">
          Link
        </a>
      </div>
      <div>
        📲 Follow us on Instagram:{' '}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline text-pink-600 hover:text-pink-800">
          Link
        </a>
      </div>
      <div>
        📲 Follow us on Twitter (X):{' '}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-600">
          Link
        </a>
      </div>
    </div>
  );
};

export default Footer;
