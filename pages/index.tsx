import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kowshik Sharan</title>
        <meta
          name="description"
          content="Personal Portfolio site of Kowshik Sharan"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Hero />
        </div>
      </main>
    </div>
  );
};

export default Home;
