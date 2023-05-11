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

  const [LineGroupData, setLineGroupData] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      const LineListUser = ref(realDB);
      onValue(
        LineListUser,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            //  const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            //  const filterchild = Object.keys(childData).filter((key) => key.includes(props.groupID))
            setLineGroupData(childData[props.groupID]);
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
        <title>LINE BOT {LineGroupData.name}</title>
      </Head>
      <NavBar />
      <HeroInGroup GroupID={props.data.membersIDX} GroupData={LineGroupData}/>
      <Container>
        <TableUsers UserXdata={props.data} GroupData={LineGroupData}/>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { idx } = context.params;
  try{
    const res = await fetch(`http://45.154.24.65:5430/group/${encodeURI(idx)}`);
    const data = await res.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { data: data, groupID: idx },
    };
  }catch(e){
    console.error(e)
  }

  
}
