//import FirebaseAuth from '@/components/auth/FirebaseAuth'
import { Container } from "@/components/Container";
import Link from "next/link";
const Manual = () => {
  return (
    <>
      <Container>
        <div className="py-40">
          ไม่มีหรอก คู่มือ ขี้เกรียดทำ
          <Link href="/">Go Home</Link>
        </div>
      </Container>
    </>
  );
};

export default Manual;
