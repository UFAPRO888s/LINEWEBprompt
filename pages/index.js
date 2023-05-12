import React, { useEffect, useState } from "react";
import { useLiff } from "../hooks/useLiff";
import Head from "next/head";
import { useRouter } from "next/router";
//import WriteToCloudFirestore from "@/components/cloudFirestore/Write";
//import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
//import { useUser } from "@/lib/firebase/useUser";
//import Counter from "@/components/realtimeDatabase/Counter";
// import UploadFile from '@/components/storage/UploadFile'
import { Container } from "@/components/Container";
//import { realDB } from "@/lib/firebase/initFirebase";
//import { ref, onValue, off } from "firebase/database";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ListCard from "@/components/ListCard";

export default function Home(props) {
  const router = useRouter();
  const [idName, setidName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [pictureUrl, setpictureUrl] = useState("");
  
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      const profile = await liff.getProfile();
      console.log(profile)
      setDisplayName(profile.displayName);
      setidName(profile.userId);
      setpictureUrl(profile.pictureUrl)
    })();
  }, [liff, isLoggedIn]);

  const showDisplayName = () => {
    if (error) return <p>Something is wrong.</p>;
    if (!isReady) return <p>Loading...</p>;

    if (!isLoggedIn) {
      return (
        <button
          className="focus:ring-none focus:ring-offset-none inline-flex items-center justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-indigo-500 sm:w-auto"
          onClick={liff.login}
        >
          Login
        </button>
      );

    }
    return (
      <>
        <p className="mt-2 text-lg text-gray-50">{idName}</p>
        <p className="text-lg text-gray-50">{displayName}</p>
        <button
          className="focus:ring-none focus:ring-offset-none inline-flex items-center justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-indigo-500 sm:w-auto"
          onClick={liff.logout}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>LINE BOT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero
        UserpictureUrl={pictureUrl}
        NameBot={showDisplayName()}
        numGroup={props.dataGroup.numGroup}
      />
      <Container>
        <div className="py-8">
          <ListCard Data={props.dataGroup} />
        </div>
      </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/groups/`);
  const data = await res.json();
  return {
    props: { dataGroup: data },
  };
}
