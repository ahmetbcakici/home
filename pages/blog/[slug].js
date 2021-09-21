import React from "react";
import Head from "next/head";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { getPostBySlug, getAllPosts } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { useRouter } from "next/router";
import PostBody from "components/post-body";

export default function BlogPost({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
        <Head>
          <title>Blog | {post.slug}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
          <Navbar />
          <div className="w-full page-max-width  py-4 px-2">
            <code className="text-blue-400 text-lg">{post.title}</code>
            {/* <p className="text-gray-300 mt-3">{post.content}</p> */}
            <PostBody content={post.content} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
