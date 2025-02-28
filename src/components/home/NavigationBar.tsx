import React from "react";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`z-0 flex flex-col items-center text-[11px] font-medium ${
        isActive ? "text-[#00386c]" : "text-[#898989]"
      } cursor-pointer`}
      onClick={onClick}
    >
      <img src={icon} alt={label} className="aspect-[1] object-contain w-6" />
      <div className="mt-[5px]">{label}</div>
    </div>
  );
};

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="justify-between backdrop-blur-[17.5px] bg-[rgba(250,250,250,0.90)] relative flex w-full text-[#898989] whitespace-nowrap text-center px-8 py-[15px]">
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/640b019c966a342bfe7de321bf0e631b47802ff9588d0159776566c193ca078f?placeholderIfAbsent=true"
        label="Home"
        isActive={activeTab === "Home"}
        onClick={() => handleTabClick("Home")}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/5ff656104d80b4dd0c2188c75ff934fd37b40ebd2d5dc23b019837d8f3c57734?placeholderIfAbsent=true"
        alt="Active indicator"
        className="object-contain w-[33px] stroke-[3px] stroke-[#00386C] absolute z-0 shrink-0 h-0 left-8 top-0.5"
      />
      <div
        className={`z-0 flex flex-col items-stretch w-[53px] cursor-pointer ${
          activeTab === "Originals" ? "text-[#00386c]" : "text-[#898989]"
        }`}
        onClick={() => handleTabClick("Originals")}
      >
        <div className="text-2xl font-normal leading-none self-center">O</div>
        <div className="text-[11px] font-medium mt-[5px]">Originals</div>
      </div>
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/352b517fdb2adbdeadef23c938d59c3870f72b8f7c31d6218f700b7a28434297?placeholderIfAbsent=true"
        label="Authors"
        isActive={activeTab === "Authors"}
        onClick={() => handleTabClick("Authors")}
      />
      <NavItem
        icon="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/f9a593275cb9954030e3e02c3e8bee80a99b9a0f0be137bfa6150f856b36fd46?placeholderIfAbsent=true"
        label="Profile"
        isActive={activeTab === "Profile"}
        onClick={() => handleTabClick("Profile")}
      />
    </div>
  );
};

export default NavigationBar;
