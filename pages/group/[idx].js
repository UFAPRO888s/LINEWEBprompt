import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "@/components/Container";
import NavBar from "@/components/NavBar";
import HeroInGroup from "@/components/HeroInGroup";
import { realDB } from "@/lib/firebase/initFirebase";
import { ref, onValue, off } from "firebase/database";
import TableUsers from "@/components/TableUsers";

export default function GroupDetail(props) {
  //const [LineGroupData, setLineGroupData] = useState("");
  //console.log(props.data)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const LineListUser = await fetch("http://localhost:3000/api/groups");
  //     const childSnapshot = await LineListUser.json();
  //     //const resultSnap = Object.keys(childSnapshot['groupData']).filter((key) => childSnapshot['groupData'][key].id.includes(props.GroupID))
  //     //  const resultSnap = childSnapshot['groupData'].filter(ListG => ListG.id == props.GroupID);
  //     const resultSnap = Object.keys(childSnapshot["groupData"]).filter(
  //       (key) => childSnapshot["groupData"][key].id == props.GroupID
  //     );
  //     console.log(resultSnap);
  //   };
  //   fetchData();
  //   return () => {};
  // }, []);

  return (
    <>
      <Head>
        <title>LINE BOT {props.data.groupName}</title>
      </Head>
      <NavBar />
      <HeroInGroup GroupData={props.data} />
      <Container>
        <TableUsers GroupData={props.data} />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { idx } = context.params;
  // console.log(idx)
  try {
    const res = await fetch(
      `http://localhost:3000/api/members/?idx=${encodeURI(idx)}`
    );
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { data: data, groupID: idx },
    };
  } catch (e) {
    console.error(e);
  }
}
