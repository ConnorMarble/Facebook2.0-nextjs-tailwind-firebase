import { ReactElement } from "react";
import { PostInterface } from "src/types/interface";
import InputBox from "./InputBox";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";

interface FeedProps {
  posts: PostInterface[];
}

export default function Feed({ posts }: FeedProps): ReactElement {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto hide-scrollbar">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}
