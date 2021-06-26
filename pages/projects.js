import React from "react";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";

import chember from "public/chember.jpg";

// Manage content here for ease of use.
const PROJECTS = [
  {
    title: "Chember",
    desc: "Connect with streetball communities around you.",
    href: "https://chember.co",
    photo: chember.src,
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
        <div className="w-full max-w-2xl py-4 px-2">
          <code className="text-blue-400 text-lg">🛠 Projects</code>
          <p className="text-gray-300 mt-3">
            I develop across a wide range of platforms, from web to mobile to EV
            chargers ⚡️. I am specialized in web applications, both client and
            server side, and have deployed multiple of them in production level.
            My weapon of choice are JavaScript and TypeScript.
            <div className="mb-3" />
            Here are some of my notable projects...
          </p>
          <div className="py-5 flex flex-wrap gap-4 justify-center sm:justify-start ">
            {PROJECTS.map((p) => (
              <Project data={p} />
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
  const { title, desc, href, photo = "" } = data;
  return (
    <div className="bg-gray-990 shadow-md hover:scale-101 transition w-52 min-h-64 rounded-md pb-1 overflow-hidden  mb-1">
      <div className="h-36  bg-gray-300 w-full">
        {photo && <img src={photo} className="h-full  object-fill" />}
      </div>
      <div className="p-2 text-gray-400">
        <ProjectLink label={title} href={href} />
        <p className="text-xs mb-1">co founder and CTO</p>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
};

const ProjectLink = ({ label, href }) => {
  return (
    <div className="my-1">
      <a
        className="text-blue-400  "
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
};
