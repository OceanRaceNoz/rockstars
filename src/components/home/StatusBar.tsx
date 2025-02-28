import React from "react";

const StatusBar: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] z-10 w-full overflow-hidden pl-5 pr-3 py-2.5">
      <div className="flex w-full max-w-[343px] items-center gap-[40px_100px] justify-between pl-[5px]">
        <div className="text-[#343333] text-center text-[15px] font-[590] leading-none self-stretch my-auto">
          9:41
        </div>
        <div className="self-stretch flex items-center gap-1.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/3d1935642eedf86849119d4125228e80ae17ac3de867b674e55b264bd22a92e2?placeholderIfAbsent=true"
            alt="Signal strength"
            className="aspect-[1.7] object-contain w-[17px] fill-[#343333] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/0bb560d124e489d8e1aceedc7b04487b4af9b034bd1f3a4ffe3952d7741fd031?placeholderIfAbsent=true"
            alt="Battery level"
            className="aspect-[1.5] object-contain w-[15px] fill-[#343333] self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/8321d60f18cdc170c244104d8ad9afa53bbe5890264a81e4b7c407c53e049cfa?placeholderIfAbsent=true"
        alt="Logo"
        className="aspect-[1.85] object-contain w-[61px] mt-[11px]"
      />
    </div>
  );
};

export default StatusBar;
