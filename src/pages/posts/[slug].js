import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import Meta from "../../components/Meta";
import { dateFinder } from "../../components/mainFunctions.js";
// import Container from "../../components/container";

export default function Post({ post }) {
  //post data
  const {
    title,
    slug,
    keywords,
    description,
    headOne,
    paraOne,
    headTwo,
    paraTwo,
    headThree,
    paraThree,
    headFour,
    paraFour,
    headFive,
    paraFive,
  } = post.fields;
  //post date
  const { createdAt } = post.sys;
  //date formatte
  const date = dateFinder(createdAt);

  return (
    <>
      <Meta title={title} keywords={keywords} description={description} />
      <article className="text-3xl text-lightWhite font-plex m-auto md:max-w-3xl mt-10 bg-gray">
        <h1 className="text-3xl text-lightWhite font-plex font-bold md:text-5xl ">
          {title}
        </h1>
        <button className="w-auto p-2 mt-2 bg-brightYellow h-auto rounded-xl text-base">
          {date}
        </button>
        <h2 className="text-3xl mt-5 mb-3 text-bold">{headOne}</h2>
        <p className="text-lg">{paraOne}</p>
        <h2 className="text-3xl mt-5 mb-3 text-bold">{headTwo}</h2>
        <p className="text-lg">{paraTwo}</p>
        <h2 className="text-3xl mt-5 mb-3 text-bold">{headThree}</h2>
        <p className="text-lg">{paraThree}</p>
        <h2 className="text-3xl mt-5 mb-3 text-bold">{headFour}</h2>
        <p className="text-lg">{paraFour}</p>
        <h2 className="text-3xl mt-5 mb-3 text-bold">{headFive}</h2>
        <p className="text-lg">{paraFive}</p>
      </article>
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
        slug: item.fields.postUrl,
      },
    };
  });
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
    "fields.postUrl": params.slug,
  });
  return {
    props: {
      post: items[0],
    },
  };
};

// https://api.covalenthq.com/v1/56/address/0x4b6fc700fb41ab5F6A7dfd2b88dc6159155695F0/balances_v2/?key=ckey_71280bb908974ebf830b94ecb7f
