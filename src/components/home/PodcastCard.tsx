import React from "react";

interface PodcastCardProps {
  imageUrl: string;
  logoUrl: string;
  rating: string;
  comments: string;
  title: string;
  description: string;
  date: string;
  tagName: string;
  tagRating: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  imageUrl,
  logoUrl,
  rating,
  comments,
  title,
  description,
  date,
  tagName,
  tagRating,
}) => {
  return (
    <div className="shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30),0px_2px_6px_2px_rgba(0,0,0,0.15)] self-stretch min-w-60 w-[309px] my-auto">
      <img
        src={imageUrl}
        alt={title}
        className="aspect-[1.78] object-contain w-full min-h-[174px] gap-2.5 rounded-[10px_10px_0px_0px]"
      />
      <div className="bg-neutral-100 w-full px-[15px] py-5 rounded-[0px_0px_10px_10px]">
        <div className="flex w-full items-stretch gap-[40px_100px] text-[10px] text-[#00386c] font-semibold text-right leading-none justify-between">
          <img
            src={logoUrl}
            alt="Logo"
            className="aspect-[1.9] object-contain w-[38px] shrink-0 my-auto"
          />
          <div className="flex flex-col items-stretch justify-center w-[98px]">
            <div className="flex w-full items-center gap-0.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c4a80ca25f2800aef927eec39a7990fc52e513847c8b6544f2b1fd24aa8fdaf6?placeholderIfAbsent=true"
                alt="Star"
                className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch my-auto">
                {rating}{" "}
                <span className="font-normal text-[rgba(137,137,137,1)]">
                  ({comments})
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#00386C] text-xl font-bold mt-2">{title}</div>
        <div className="w-full mt-2">
          <div className="flex-1 shrink basis-[0%] w-full gap-[5px] text-base text-[#343333] font-normal">
            {description}
          </div>
          <div className="flex w-full gap-2 whitespace-nowrap mt-[30px]">
            <div className="flex items-center gap-2 text-[15px] text-[#343333] font-bold flex-1 shrink basis-[30px]">
              <div className="self-stretch w-full flex-1 shrink basis-[0%] my-auto">
                <div className="opacity-50">{date}</div>
              </div>
            </div>
            <div className="justify-center items-center bg-[linear-gradient(95deg,#A560D6_-8.15%,#4D1973_111.61%)] flex gap-1.5 text-neutral-50 px-[15px] py-2.5 rounded-[5px]">
              <div className="text-[13px] font-normal leading-loose self-stretch my-auto">
                {tagName}
              </div>
              <div className="self-stretch flex items-center gap-0.5 text-[10px] font-semibold leading-none my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/c4a80ca25f2800aef927eec39a7990fc52e513847c8b6544f2b1fd24aa8fdaf6?placeholderIfAbsent=true"
                  alt="Star"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">{tagRating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
