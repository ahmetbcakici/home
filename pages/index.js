import Head from "next/head";
import Navbar from "components/navbar";
import Image from "next/image";
import Woods from "public/intro.jpeg";
import Footer from "components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-1000">
      <Head>
        <title>Ege's World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center  w-full flex-1  px-3 sm:px-10 lg:px-20 ">
        <Navbar />
        <div className="w-full max-w-2xl py-4 px-2">
          <code className="text-blue-400 text-lg">🌎 Hello World!</code>
          <p className="text-gray-300 mt-3">
            Hey there, it's Ege. Welcome to v2 of my website, I am hoping to
            aggregate my up to date life, blogs, photography and videography
            here.
            <div className="mb-3" />
            I'm a senior in Washington University in St Louis studying Computer
            Science and lovin' it. I also develop software applications for the
            good and hope they scale to help more people with their daily lives.
          </p>
          <div className="amk overflow-hidden w-full lg:w-4/5 self-center m-auto my-6">
            <Image src={Woods} objectFit="fill" placeholder="blur" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
