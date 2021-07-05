import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Item from "components/social-item";
const ITEMS = [
  {
    label: "Youtube",
    // icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    icon: "/youtube.svg",
    href: "https://www.youtube.com/channel/UC0h2eS9IiX_u0Fc_3iQRkAQ",
  },
  {
    label: "VSCO",
    // icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/VSCO_Seal.svg",
    icon: "/vsco.svg",
    href: "https://vsco.co/egecavusogluu",
  },
];

const Graphy = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Graphy | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full page-max-width  py-4 px-2">
          <code className="text-blue-400 text-lg">
            📸 Photography & Videography
          </code>
          <p className="text-gray-300 mt-3">
            Documenting life for sharing with the loved ones and introspection.
            You would be surprised how much we lack thinking about what we lived
            through or reflecting on our memories.
            <div className="mb-3" />
            Although I am still experimenting on what I like to do, I'm
            capturing videos and photos on these platforms. Find me on...
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
export default Graphy;
