import React from 'react';
import TrustIndicator from './TrustIndicator';
import CTAButtons from './CTAButtons';

const HeroSection = () => {
  return (
    <main className="flex items-center gap-[40px_76px] flex-wrap mt-[76px] max-md:max-w-full max-md:mr-[3px] max-md:mt-10">
      <section className="self-stretch flex min-w-60 flex-col w-[409px] my-auto">
        <div className="self-stretch w-full text-[rgba(73,136,123,1)]">
          <h1 className="text-[45px] font-black border-[rgba(73,136,123,1)] max-md:text-[40px] leading-tight">
            Financial Wellness for Teams That Care
          </h1>
          <p className="text-xl font-medium mt-[17px] leading-relaxed">
            Give your employees the tools to stress less, save more, and live better
          </p>
        </div>
        <TrustIndicator />
        <CTAButtons />
      </section>
      <aside className="self-stretch min-w-60 my-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/c331b6d3203c9a5f93b08e90e304c83825b27b72?placeholderIfAbsent=true"
          className="aspect-[0.95] object-contain w-[464px] self-stretch min-w-60 my-auto rounded-[32px] max-md:max-w-full"
          alt="Financial wellness platform dashboard showing various features and analytics"
        />
      </aside>
    </main>
  );
};

export default HeroSection;
