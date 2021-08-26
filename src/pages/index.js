import Link from "next/link";
import { createClient } from "contentful";
import Header from "../components/Header.js";

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

const index = ({ posts }) => {
  const postTitle = posts[0].fields.title;
  const hrefValue = postTitle.replace(/\s+/g, "-").toLowerCase();
  // console.log(hrefValue);
  // console.log(posts)
  return (
    <>
      <div className="w-11/12 m-auto">
        <Header />
        <Link href={`posts/${hrefValue}`}>{postTitle}</Link>
      </div>
    </>
  );
};

export default index;
