import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Item from "components/social-item";

const ITEMS = [
  {
    label: "Medium",
    icon: "/medium.svg",
    href: "https://egecavusoglu.medium.com/",
  },
];

const Blog = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Graphy | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full page-max-width  py-4 px-2">
          <code className="text-blue-400 text-lg">📝 Blog</code>
          <p className="text-gray-300 mt-3">
            Writing about programming, opinions and more! Find me on...
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {ITEMS.map((i) => (
              <Item label={i.label} href={i.href} icon={i.icon} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Blog;
