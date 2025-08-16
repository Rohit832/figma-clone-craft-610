import React, { useState } from 'react';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="relative z-10">
      <nav className="flex h-9 w-[470px] max-w-full items-center gap-[35px] text-sm text-black font-bold" role="navigation" aria-label="Main navigation">
        <div className="self-stretch flex items-center gap-[27px] font-normal whitespace-nowrap my-auto">
          <div className="self-stretch flex items-center gap-[23px] my-auto">
            <a href="#about" className="self-stretch my-auto hover:text-[rgba(73,136,123,1)] transition-colors">
              About
            </a>
            <a href="#contact" className="self-stretch my-auto hover:text-[rgba(73,136,123,1)] transition-colors">
              Contact
            </a>
          </div>
          <div className="self-stretch w-0 shrink-0 h-[31px] my-auto border-black border-solid border-2" aria-hidden="true" />
          <div className="self-stretch flex items-center my-auto relative">
            <button
              className="self-stretch my-auto flex items-center gap-1 hover:text-[rgba(73,136,123,1)] transition-colors"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              aria-expanded={isLanguageOpen}
              aria-haspopup="true"
              aria-label="Select language"
            >
              <span>EN</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/8a46811881b589aaf4435c8a19a180deeff8096f?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
                alt="Language selector arrow"
              />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[60px]">
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100 transition-colors">EN</button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100 transition-colors">ES</button>
                <button className="block w-full text-left px-3 py-1 hover:bg-gray-100 transition-colors">FR</button>
              </div>
            )}
          </div>
        </div>
        <a href="#signin" className="self-stretch my-auto hover:text-[rgba(73,136,123,1)] transition-colors">
          Sign In
        </a>
        <button className="bg-[rgba(68,127,115,1)] self-stretch flex min-h-[38px] items-center gap-2 text-[15px] text-white justify-center w-[150px] my-auto px-3.5 py-2.5 rounded-[39px] hover:bg-[rgba(58,117,105,1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(68,127,115,1)] focus:ring-offset-2">
          Book Demo
        </button>
      </nav>
    </header>
  );
};

export default Header;
