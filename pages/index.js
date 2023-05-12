import React, { useEffect, useState } from "react";
import { useLiff } from "../hooks/useLiff";
import Head from "next/head";
//import WriteToCloudFirestore from "@/components/cloudFirestore/Write";
//import ReadDataFromCloudFirestore from "@/components/cloudFirestore/Read";
//import { useUser } from "@/lib/firebase/useUser";
//import Counter from "@/components/realtimeDatabase/Counter";
// import UploadFile from '@/components/storage/UploadFile'
import { Container } from "@/components/Container";
import { realDB } from "@/lib/firebase/initFirebase";
import { ref, onValue, off } from "firebase/database";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ListCard from "@/components/ListCard";


export default function Home(props) {
  const [LineIDUser, setLineIDUser] = useState("");
  const [LineListUser, setLineListUser] = useState("");
  const [LineGroupNum, setLineGroupNum] = useState("");
 
  //useEffect(() => {
  //  if (!isLoggedIn) return;
  //  router.replace("/create");
  //}, [isLoggedIn]);

  //console.log(isLoggedIn);

  useEffect(() => {
    const fetchData = async () => {
      const LineListUser = ref(realDB);
      onValue(
        LineListUser,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            setLineGroupNum(Object.keys(childData).length);
            setLineIDUser(childKey);
            setLineListUser(childData);
          });
        },
        {
          onlyOnce: true,
        }
      );
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <>
      <Head>
        <title>LINE BOT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero UserID={props.dataGroup.botID} NameBot={props.dataGroup.name} numGroup={props.dataGroup.numGroup} />
      <Container>
        <div className="py-8">
          <ListCard Data={props.dataGroup} />
        </div>
      </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:6969/api/groups/`);
  const data = await res.json();
  return {
    props: {dataGroup:data}, // will be passed to the page component as props
  };
}