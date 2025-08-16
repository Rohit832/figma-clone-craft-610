import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col relative min-h-[799px] w-full items-center pt-9 pb-[163px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/f848b949fa2f31cb6cc2b1c89db8e1b80333b542?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background pattern"
        />
        <div className="relative flex mb-[-33px] w-[952px] max-w-full flex-col items-stretch max-md:mb-2.5">
          <Header />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
