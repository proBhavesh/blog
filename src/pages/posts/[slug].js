import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import Meta from "../../components/Meta";

// import Container from "../../components/container";

export default function Post({ posts }) {
  const { title, slug } = posts.fields;
  console.log(posts);
  // const postTitle = posts[0].fields.title;
  return (
    <>
      <div>{title}</div>
      <div>{slug}</div>
    </>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
// <=-----------Getting Paths----------->
export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogPost" });
  // const postData = res.items;
  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug.toString(),
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

// <=----------Getting dat------------>
export const getStaticProps = async ({ params }) => {
  // const title = params.slug.replace(/-/g, " ");
  // console.log("This is titlfrom gsp", title);
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return {
    props: {
      posts: items[0],
    },
  };
};

// https://api.covalenthq.com/v1/56/address/0x4b6fc700fb41ab5F6A7dfd2b88dc6159155695F0/balances_v2/?key=ckey_71280bb908974ebf830b94ecb7f
