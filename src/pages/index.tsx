import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { Session } from "next-auth";
import { db } from "firebase.config";
import Feed from "src/components/feed/Feed";
import Login from "src/components/Login";
import Sidebar from "src/components/sidebar/Sidebar";
import Widgets from "src/components/contacts/Widgets";
import { PostInterface } from "src/types/interface";

interface HomeProps {
  session: Session;
  posts: PostInterface[];
}

const Home: NextPage<HomeProps> = ({ session, posts }: HomeProps) => {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook 2.0</title>
        <meta name="description" content="Facebook 2.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: { session, posts: docs },
  };
};
