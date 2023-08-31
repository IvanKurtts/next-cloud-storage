import Head from "next/head";
import StartPage from "./dashboard/start";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cloud Storage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StartPage />
    </>
  );
}
