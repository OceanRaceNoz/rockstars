
import React from "react";
import PodcastCard from "./PodcastCard";

const podcastData = [
  {
    id: "1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/99b36a1f600bb85a84338e5f36a93fc15679f795be4f56d077352e681fb3ce60?placeholderIfAbsent=true",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/968843d63a2442186385613a85d94a21ccba7d3a01eeacd4aa98aab2ec18baa0?placeholderIfAbsent=true",
    rating: "4,6",
    comments: "5 Kommentare",
    title: "Fehlt dem VfL Osnabrück ein Spielmacher?",
    description:
      "Das Zentrum der Lila-Weißen bleibt beim dürftigen 1:1 gegen Hannover 96 II auffällig blass",
    date: "Heute",
    tagName: "Brückengeflüster",
    tagRating: "4,9",
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/602a915e2feb8a898f62160daf374160ce8cc73cc6295df8301e421df4ca38cb?placeholderIfAbsent=true",
    logoUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/113baf32cd9710a35cde67d2e7a82aecacff546bfd0b63c2fbffab0de1aba436?placeholderIfAbsent=true",
    rating: "4,6",
    comments: "5 Kommentare",
    title:
      "VfL Osnabrück: Neue Bälle, neue Inhalte am dritten Trainingstag in Ankum",
    description:
      "Der VfL testet neues Material und arbeitet an taktischen Feinheiten.",
    date: "Heute",
    tagName: "Brückengeflüster",
    tagRating: "4,9",
  },
];

const PodcastsScroll: React.FC = () => {
  return (
    <div className="overflow-x-auto flex items-center gap-3.5 mt-6 pl-5 pb-2">
      {podcastData.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          imageUrl={podcast.imageUrl}
          logoUrl={podcast.logoUrl}
          rating={podcast.rating}
          comments={podcast.comments}
          title={podcast.title}
          description={podcast.description}
          date={podcast.date}
          tagName={podcast.tagName}
          tagRating={podcast.tagRating}
        />
      ))}
    </div>
  );
};

export default PodcastsScroll;
