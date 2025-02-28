import React from "react";

interface Profile {
  id: string;
  name: string;
  imageUrl: string;
}

const profiles: Profile[] = [
  {
    id: "1",
    name: "Louisa Riepe",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/24c29e88d96b5d7e147d52dc97ac58ef1fef743f4c9fe1f7ff112c7108742d16?placeholderIfAbsent=true",
  },
  {
    id: "2",
    name: "Burhardt Ewert",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/71639d2a3fc94ee6596e23ada52ddaa0783533b0f7d40ec07b116f96dcae11ef?placeholderIfAbsent=true",
  },
  {
    id: "3",
    name: "Rachel Boßmayer",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/f7be60301931966bd8a59327c662e8f5f0c92cddc779f50caa90de140b9695bf?placeholderIfAbsent=true",
  },
  {
    id: "4",
    name: "Benjamin Kraus",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/55ebc718ac6b67157643aa051063e272809debc46e72a9c479679211870a6b83?placeholderIfAbsent=true",
  },
  {
    id: "5",
    name: "Ralf Döring",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/85816de47ce4ecd7eeb99327be0811622a5973b42c3d54cec14dc21747dceadd?placeholderIfAbsent=true",
  },
  {
    id: "6",
    name: "Cornelia Achenbach",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/1ad3054b3ce94f0daeab7f24b1d94f43/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true",
  },
];

const ProfilesScroll: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-neutral-50 flex gap-[25px] text-sm text-black font-normal text-center pl-5 py-5">
      {profiles.map((profile) => (
        <div key={profile.id} className="flex flex-col items-center w-[60px]">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="aspect-[1] object-contain w-[60px] rounded-[50%]"
          />
          <div className="mt-2.5">{profile.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfilesScroll;
