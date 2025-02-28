import React from "react";
import { SectionHeader } from "./OriginalsSection";

const ReadingSection: React.FC = () => {
  const handleViewAll = () => {
    console.log("View all reading items clicked");
  };

  return (
    <div className="w-full">
      <SectionHeader
        title="Das liest heute Morgen"
        actionText="Alle anzeigen"
        onActionClick={handleViewAll}
      />
      <div className="w-full overflow-hidden mt-[15px] pt-[7px] pb-[63px] px-5">
        <div className="flex items-center gap-5">
          <div className="self-stretch w-[215px] my-auto rounded-md">
            <div className="shadow-[-20px_94px_27px_0px_rgba(0,0,0,0.00),-13px_60px_25px_0px_rgba(0,0,0,0.01),-7px_34px_21px_0px_rgba(0,0,0,0.05),-3px_15px_15px_0px_rgba(0,0,0,0.09),-1px_4px_8px_0px_rgba(0,0,0,0.10)] bg-[#F7FBFF] flex flex-col items-stretch pt-[15px] px-[15px] rounded-[6.143px]">
              <div className="text-[rgba(89,89,89,1)] text-[17px] font-normal">
                Das liest
              </div>
              <div className="bg-[rgba(0,175,234,1)] text-lg text-neutral-50 font-bold text-center mt-10 pt-[9px] px-2.5 rounded-[0px_0px_0px_0px]">
                <div className="bg-[rgba(0,56,108,1)] px-2.5 rounded-[0px_0px_0px_0px]">
                  <div className="flex flex-col relative z-10 aspect-[0.831] mt-[-33px] w-[133px] pt-[43px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/85649ac32687a277f6df13beec449185f50620357794fac7115961b362b96947?placeholderIfAbsent=true"
                      alt="Background"
                      className="absolute h-full w-full object-cover inset-0"
                    />
                    <div className="relative border bg-[rgba(0,25,49,1)] pt-12 pb-[25px] px-[13px] rounded-[0px_0px_0px_0px] border-[rgba(137,137,137,1)] border-solid">
                      Louisa Riepe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/64d3c39aea0b0dbf36994ef7f164ab9fc1b7a6da5d193b43d67d14d6cf1400ff?placeholderIfAbsent=true"
            alt="Reading content"
            className="aspect-[0.69] object-contain w-[120px] self-stretch shrink-0 my-auto rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ReadingSection;
