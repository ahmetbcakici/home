import React from "react";
import Head from "next/head";
import Navbar from "components/navbar";
import Footer from "components/footer";

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
    photo:
      "https://pbs.twimg.com/card_img/1407570849436082176/aUBYeaWe?format=jpg&name=small",
  },
  {
    title: "Adresci",
    desc: "Address generator for residences with Next.js and Tailwind.",
    href: "https://github.com/egecavusoglu/adresci",
    photo:
      "https://pbs.twimg.com/card_img/1406676374786514948/cvNFGB8h?format=jpg&name=small",
  },
  {
    title: "RN Phone Code",
    desc: "React Native package for country phone codes selection.",
    href: "https://github.com/egecavusoglu/RNPhoneCodeSelect",
    photo: "",
  },
  {
    title: "egespress",
    desc: "Opinionated and powerful template for building API's with Koa.",
    href: "https://github.com/egecavusoglu/egespress",
    photo:
      "https://pbs.twimg.com/card_img/1408872179245060097/m2aMvgUZ?format=jpg&name=small",
  },
  {
    title: "Cameo App",
    desc: "Lookup movies and get details.",
    href: "https://github.com/egecavusoglu/CameoApp",
    photo:
      "https://pbs.twimg.com/card_img/1408860322199269377/HdZJxfLH?format=jpg&name=small",
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
  const { title, desc, href, photo = "", position } = data;
  return (
    <div className="bg-gray-990 shadow-md hover:scale-101 transition w-52 min-h-64 rounded-md pb-1 overflow-hidden  mb-1">
      <div className="h-min  bg-gray-900 w-full">
        {photo && <img src={photo} className={`h-max-36 object-cover`} />}
      </div>
      <div className="p-2 text-gray-400">
        <ProjectLink label={title} href={href} />
        {position && <p className="text-xs mb-1">{position}</p>}
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
