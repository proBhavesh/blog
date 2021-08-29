import Link from "next/link";
import { createClient } from "contentful";
import Header from "../components/Header.js";
import PostCard from "../components/PostCard.js";

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

//page comonent
const index = ({ posts }) => {
  console.log(posts);
  // const postTitle = posts[0].fields.title;
  // const hrefValue = postTitle.replace(/\s+/g, "-").toLowerCase();
  // console.log(hrefValue);
  // console.log(posts)
  return (
    <>
      <div className="w-11/12 m-auto">
        <Header />
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default index;
