import React from "react";

interface SectionHeaderProps {
  title: string;
  actionText: string;
  onActionClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  actionText,
  onActionClick,
}) => {
  return (
    <div className="flex w-full max-w-[358px] flex-col items-stretch justify-center pl-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between">
        <div className="text-[#343333] text-xl font-medium leading-none self-stretch my-auto">
          {title}
        </div>
        <div
          onClick={onActionClick}
          className="text-[rgba(0,56,108,1)] text-xs font-normal leading-[25px] self-stretch my-auto cursor-pointer"
        >
          {actionText}
        </div>
      </div>
    </div>
  );
};

const OriginalsSection: React.FC = () => {
  const handleViewAll = () => {
    console.log("View all originals clicked");
  };

  return (
    <div className="mt-[50px]">
      <SectionHeader
        title="Originals"
        actionText="Alle anzeigen"
        onActionClick={handleViewAll}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/70889862130d3d09c5766962a7bd6e9dca6a1db2d9cd701c3b89ae80c31bcb68?placeholderIfAbsent=true"
        alt="Originals content"
        className="aspect-[0.65] object-contain w-full mt-[15px]"
      />
    </div>
  );
};

export default OriginalsSection;
export { SectionHeader };
