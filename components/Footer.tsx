import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-100 text-slate-700 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">Thank you for being part of our journey!</p>
        <h3 className="font-heavenly text-3xl md:text-4xl text-rose-700 my-4"> Vân Anh <span className="text-rose-500">💕</span> Quốc Tuấn </h3>
        <p className="text-lg text-slate-500">Made with love</p>
      </div>
    </footer>
  );
};

export default Footer;