import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import Meta from "../../../components/Meta";

// import Container from "../../components/container";

export default function Post({ posts }) {
  return (
    <>
      <div>Blog page</div>
      {/*<div>{posts.}</div>*/}
    </>
  );
}

// <=---------------------->
export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blogPost" });
  const postData = res.items;
  const paths = res.items.map((item) => {
    return {
      params: {
        id: item.fields.title.replace(/\s+/g, "-").toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// <=---------------------->
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
