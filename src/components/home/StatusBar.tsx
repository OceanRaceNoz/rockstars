
import React from "react";

const StatusBar: React.FC = () => {
  return (
    <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.25)] z-10 w-full overflow-hidden pl-5 py-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/8321d60f18cdc170c244104d8ad9afa53bbe5890264a81e4b7c407c53e049cfa?placeholderIfAbsent=true"
        alt="Logo"
        className="aspect-[1.85] object-contain w-[61px]"
      />
    </div>
  );
};

export default StatusBar;
