import Link from "next/link";
import { createClient } from "contentful";
import Header from "../components/Header.js";
import PostCard from "../components/PostCard.js";
import Meta from "../components/Meta";

//page comonent
export default function index({ posts }) {
  console.log(posts);
  return (
    <>
      <Meta />
      <div className="w-11/12 m-auto">
        <Header />
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </>
  );
}

//getting data
export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: res.items,
    },
  };
};
