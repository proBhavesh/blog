import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="goG2RV72oRydCQaxXvLFzcmQkIyCXwKep7HMAVGG_YY"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Bhavesh - My personel blog",
  keywords: "web development, programming",
  description: "My personel blog - Shares my random thoughts here.",
};

export default Meta;
