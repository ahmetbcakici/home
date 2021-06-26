import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
const Graphy = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Graphy | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full max-w-2xl py-4 px-2">
          <code className="text-blue-400 text-lg">
            📸 Photography & Videography
          </code>
          <p className="text-gray-300 mt-3">
            <div className="mb-3" />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Graphy;
