import React from 'react';

const TrustIndicator = () => {
  return (
    <div className="w-[266px] max-w-full text-[17px] text-[rgba(52,73,71,1)] font-normal mt-[37px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/0e043f5158ade1fff903afa3d674191500c9081c?placeholderIfAbsent=true"
        className="aspect-[2.48] object-contain w-[134px] max-w-full"
        alt="Trust badges and certifications"
      />
      <div className="flex min-h-[30px] w-full items-center gap-1.5 mt-6 pl-[11px] pr-[7px] rounded-[35px]" role="status" aria-label="User statistics">
        <img
          src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/45d3d130512d91825afae55d8be6bdf144561239?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[11px] self-stretch shrink-0 my-auto"
          alt="Users icon"
        />
        <div className="self-stretch w-[230px] my-auto">
          <span className="font-extrabold text-[rgba(52,73,71,1)]">1043+</span>{" "}
          <span className="font-semibold text-[rgba(52,73,71,1)]">people already joined</span>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicator;
