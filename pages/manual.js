//import FirebaseAuth from '@/components/auth/FirebaseAuth'
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import Link from "next/link";
import Profile from "@/components/Profile";
const Manual = () => {
  
  return (
    <>
      <Container>
        <div className="py-40">
          ไม่มีหรอก คู่มือ ขี้เกรียดทำ
          <Link href="/">Go Home</Link>
          <Profile />
        </div>
      </Container>
    </>
  );
};

export default Manual;
