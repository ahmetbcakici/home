import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Item from "components/social-item";

const ITEMS = [
  {
    label: "Superpeer",
    icon: "/superpeer.svg",
    href: "https://superpeer.com/egecavusoglu",
  },
];

const Blog = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Mentorship | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full page-max-width  py-4 px-2">
          <code className="text-blue-400 text-lg">
            👨‍💻 Mentorship & Chat with me
          </code>

          <div className="mb-3">
            <p className="text-gray-300 mt-3">
              Learning from others' experiences and listening to their stories
              has always been the most enjoyable way for me to plan what's
              ahead. If you need someone for advice and feel like I can help,
              hit me up!
            </p>
          </div>
          <p className="text-gray-300 mt-3">
            I have built several products from ground up, and contributed to
            some huge software products. You can talk to me about your product,
            software project, early career goals, interning at a big tech
            company or studying Computer Science in US. Book a time with me on
            Superpeer!
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
