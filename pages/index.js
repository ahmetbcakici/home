import Head from "next/head";
import Navbar from "components/navbar";
import Item from "components/social-item";
import Footer from "components/footer";
import LinkText from "components/link-text";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/egecavusoglu",
    icon: "/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/egecavusoglu",
    icon: "/github.svg",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/egecavusoglu_",
    icon: "/twitter.svg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Hello World | Ege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full max-w-2xl py-4 px-2">
          <div className="flex flex-row items-center gap-3">
            <code className="text-blue-400 text-lg">🌎 Hello World!</code>
            {/* <p className="text-gray-200 text-sm">from</p> */}
            <div className=" rounded-full py-1 px-2 border-blue-400 bg-blue-500 border-2 my-2  bg-opacity-30 w-min whitespace-nowrap">
              <p className="text-gray-200 text-xs">Seattle, WA</p>
            </div>
          </div>
          <p className="text-gray-300 mt-3">
            Hey there, it's Ege. Welcome to v2 of my website. I am hoping to
            aggregate my up to date life, blog, photography and videography
            here.
            <div className="mb-3" />
            I'm a senior at{" "}
            <LinkText href="https://wustl.edu/">
              Washington University in St. Louis
            </LinkText>{" "}
            studying Computer Science and loving it. I also develop software
            applications for the good and hope they scale to help more people
            with their daily lives. Currently I am working as a Software
            Engineer Intern at{" "}
            <LinkText href="https://www.microsoft.com/en-us/">
              Microsoft
            </LinkText>
            .
            <div className="mb-3" />
            Connect with me on...
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {LINKS.map((i) => (
              <Item label={i.label} href={i.href} icon={i.icon} />
            ))}
          </div>
          <div className="amk overflow-hidden w-full lg:w-4/5 self-center m-auto my-6 rounded-lg">
            <img src={"/intro.jpeg"} objectFit="fill" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
