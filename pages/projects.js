import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Shimmer from "components/shimmer";

// Manage content here for ease of use.

const PROJECTS = [
  {
    title: "Chember",
    position: "Co founder and CTO",
    desc: "Connect with streetball communities around you.",
    href: "https://chember.co",
    photo: "/chember.jpg",
  },
  {
    title: "dostman",
    desc: "Maintain your API development, documentation and experimentation all within your codebase.",
    href: "https://github.com/egecavusoglu/dostman",
    extractImageFromOg: true,
  },
  {
    title: "Adresci",
    desc: "Address generator for residences with Next.js and Tailwind.",
    href: "https://github.com/egecavusoglu/adresci",
    extractImageFromOg: true,
  },
  {
    title: "RN Phone Code",
    desc: "React Native package for country phone codes selection.",
    href: "https://github.com/egecavusoglu/RNPhoneCodeSelect",
    photo:
      "https://github.com/egecavusoglu/RNPhoneCodeSelect/raw/master/assets/phone-select-gif.gif",
  },
  {
    title: "egespress",
    desc: "Opinionated and powerful template for building API's with Koa.",
    href: "https://github.com/egecavusoglu/egespress",
    extractImageFromOg: true,
  },
  {
    title: "Cameo App",
    desc: "Lookup movies and get details.",
    href: "https://github.com/egecavusoglu/CameoApp",
    extractImageFromOg: true,
  },
];

const Projects = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Projects | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full max-w-5xl py-4 px-2">
          <code className="text-blue-400 text-lg">🛠 Projects</code>
          <p className="text-gray-300 mt-3">
            I develop across a wide range of platforms, from web to mobile to EV
            chargers ⚡️. I am specialized in web applications, both client and
            server side, and have deployed multiple of them in production level.
            My weapons of choice are JavaScript and TypeScript.
            <div className="mb-3" />
            Here are some of my notable projects...
          </p>
          <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start ">
            {PROJECTS.map((p) => (
              <Project key={p.href} data={p} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
export default Projects;

const Project = ({ data }) => {
  const {
    title,
    desc,
    href,
    photo = false,
    position,
    extractImageFromOg,
  } = data;
  const [imageSrc, setImageSrc] = useState(photo);
  const [loading, setLoading] = useState(true);
  const PHOTO_PLACEHOLDER_HEIGHT = imageSrc ? "" : "h-36";
  useEffect(() => {
    if (extractImageFromOg) crawlImage(href);
  }, []);

  const crawlImage = async (url) => {
    try {
      const res = await fetch("/api/crawl-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      }).then((r) => r.json());
      if (res.success) {
        // return res.imageUrl;
        setImageSrc(res.imageUrl);
      }
    } catch (err) {
      console.log("NO IMAGE", err);
    }
  };

  return (
    <div className="bg-gray-990 shadow-md hover:scale-101 transition w-11/12  min-h-64 rounded-md  overflow-hidden mx-auto">
      <div
        className={`h-min ${PHOTO_PLACEHOLDER_HEIGHT} sm:max-h-48 bg-gray-900 w-full relative overflow-hidden`}
      >
        {imageSrc && (
          <img
            onLoad={() => setLoading(false)}
            src={imageSrc}
            className={`h-full w-full object-cover`}
          />
        )}
        <Shimmer show={loading} />
      </div>
      <div className="p-2 text-gray-400">
        <ProjectLink label={title} href={href} />
        {position && <p className="text-xs mb-1 text-blue-200">{position}</p>}
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

const ProjectLink = ({ label, href }) => {
  return (
    <div className="my-1">
      <a
        className="text-blue-400"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
};
