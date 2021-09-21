import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { getAllPosts } from "lib/api";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Blog | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full page-max-width  py-4 px-2">
          <code className="text-blue-400 text-lg">📝 Blog</code>
          <p className="text-gray-300 mt-3">Check out my blog posts!</p>
          <div className="mt-6">
            {posts.map((p) => (
              <BlogItem key={p.slug} data={p} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function BlogItem({ data, onClick }) {
  const formattedDate = data.date;
  return (
    <div
      onClick={onClick}
      className="p-4 bg-gray-800 text-left mb-4 rounded-lg"
    >
      <Link href={`blog/${data.slug}`}>
        <a>
          <p className="text-gray-200 mb-1 text-lg">{data.title}</p>
        </a>
      </Link>
      <p className="text-gray-400">{data.excerpt} </p>
      <p className="text-blue-400 text-right mt-2 mr-1">
        {/* <span className="text-blue-400">{data.author.name}</span>{" "} */}
        {formattedDate}
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);
  return {
    props: {
      posts: posts,
    },
  };
}
