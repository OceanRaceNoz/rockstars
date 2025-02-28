
import React from "react";
import StatusBar from "@/components/home/StatusBar";
import ProfilesScroll from "@/components/home/ProfilesScroll";
import FeaturedAuthor from "@/components/home/FeaturedAuthor";
import PodcastsScroll from "@/components/home/PodcastsScroll";
import OriginalsSection from "@/components/home/OriginalsSection";
import ReadingSection from "@/components/home/ReadingSection";
import NavigationBar from "@/components/home/NavigationBar";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex max-w-[480px] w-full flex-col overflow-hidden items-stretch mx-auto min-h-screen">
      <StatusBar />

      <ProfilesScroll />

      <div className="bg-[#F1EBF3] w-full py-8">
        <FeaturedAuthor
          name="Malte Goltsche"
          title="Stimme für den VfL Osnabrück"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/69a43bb8fc0db7427d29fa84799d76d551e3330974f10ffbbb99ea457abbf0fa?placeholderIfAbsent=true"
          badgeUrl="https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/71664d8bd6e1cf461f57b6c73d7e24b6b00afe861d0b6ba39e8ca6d7148b5b52?placeholderIfAbsent=true"
          buttonText="Maltes Blick aufs Spiel"
        />

        <PodcastsScroll />
      </div>

      <OriginalsSection />

      <ReadingSection />

      <div className="mt-auto">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Index;
