import { ReactElement } from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Connor Marble",
    src: "https://res.cloudinary.com/instaclone-mernstack/image/upload/v1629072978/230157507_10227278395090358_4299704553321000148_n_crcm2i.jpg",
    profile:
      "https://res.cloudinary.com/instaclone-mernstack/image/upload/v1629073157/52491578_10218982667782360_7143944988928245760_n_sik57t.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

export default function Stories(): ReactElement {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.name}
          src={story.src}
          name={story.name}
          profile={story.profile}
        />
      ))}
    </div>
  );
}
