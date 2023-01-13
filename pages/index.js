import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <div className="body">
        <p>hola</p>
      </div>
      <style jsx>{`
        header {
          background: url("/header.jpeg");
          background-size: cover;
          background-position: center;
          height: 55vw;
          max-height: 350px;
        }
      `}</style>
    </div>
  );
}
