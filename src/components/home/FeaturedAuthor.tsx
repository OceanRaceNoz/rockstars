import React from "react";

interface FeaturedAuthorProps {
  name: string;
  title: string;
  imageUrl: string;
  badgeUrl: string;
  buttonText: string;
}

const FeaturedAuthor: React.FC<FeaturedAuthorProps> = ({
  name,
  title,
  imageUrl,
  badgeUrl,
  buttonText,
}) => {
  return (
    <div className="shadow-[-38px_64px_21px_0px_rgba(0,0,0,0.00),-25px_41px_19px_0px_rgba(0,0,0,0.01),-14px_23px_16px_0px_rgba(0,0,0,0.05),-6px_10px_12px_0px_rgba(0,0,0,0.09),-2px_3px_7px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(95deg,#A560D6_-8.15%,#4D1973_111.61%)] w-full ml-5 pt-[13px] pb-6 px-3.5 rounded-[10px]">
      <div className="flex items-center gap-[13px]">
        <img
          src={imageUrl}
          alt={name}
          className="aspect-[0.97] object-contain w-[120px] self-stretch shrink-0 my-auto rounded-[76px]"
        />
        <div className="self-stretch flex flex-col items-stretch w-[175px] my-auto">
          <div className="w-full">
            <div className="w-full">
              <div className="text-[#CBBAD6] text-xs font-semibold">
                Diese Woche im Fokus
              </div>
              <div className="w-full text-neutral-50 mt-1.5">
                <div className="text-xl font-bold">{name}</div>
                <div className="text-xs italic font-normal leading-none">
                  {title}
                </div>
              </div>
            </div>
          </div>
          <div className="items-center bg-[rgba(250,250,250,0.90)] flex gap-[5px] text-xs text-[rgba(112,32,140,1)] font-medium leading-none mt-[15px] px-2.5 py-[5px] rounded-[3px]">
            <div className="self-stretch my-auto">{buttonText}</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/ff9a507c4f651bd78af83dea4e1ab35598cf135a55337f47bb94ad7c697fc943?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-[18px] rounded self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
      <img
        src={badgeUrl}
        alt="Badge"
        className="aspect-[1] object-contain w-9 z-10 mt-[-47px] ml-[84px]"
      />
    </div>
  );
};

export default FeaturedAuthor;
