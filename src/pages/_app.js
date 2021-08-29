import "../styles/global.css";
import "tailwindcss/tailwind.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import {Navbar} from "../components/Navbar.js";
const progress = new ProgressBar({
  size: 3,
  color: "#25AD78",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} className="bg-gray-900"/>
    </>
  );
};

export default MyApp;
