import { ReactElement } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "firebase.config";
import Post from "./Post";
import { PostInterface } from "src/types/interface";

interface PostsProps {
  posts: PostInterface[];
}

export default function Posts({ posts }: PostsProps): ReactElement {
  const [realTimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div className="">
      {realTimePosts
        ? realTimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().image}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}
