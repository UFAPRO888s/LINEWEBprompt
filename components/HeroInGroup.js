import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function HeroInGroup({ GroupData }) {
  const [SuccessrejectGroupOnce, setSuccessrejectGroupOnce] = useState();
  const idRe = Object.keys(GroupData.inviteData).map((key) => {
    return key;
  });
//console.log(GroupData)
  const kickgroupreject = async () => {
    try {
      const response = await fetch("http://45.154.24.65:5430/groupreject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gid: GroupData.groupID, ck: idRe }),
      });

      const result = await response.json();
      if (result) {
        setSuccessrejectGroupOnce("OK");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full rounded-md object-cover"
          src="/img/แมวลาย.webp"
          alt="BOT SELF LINE"
          width={100}
          height={100}
        />
        <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="sm:py-22 relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          LINE GROUP
        </h1>
        <div className="flex gap-4">
          <div>
            <p className="text-md mt-6 max-w-3xl text-indigo-100">
              LINE กลุ่ม {GroupData.groupName}{" "}
              <span className="break-all text-lg font-bold uppercase">
                {GroupData.groupID}
              </span>
              <br />
              มีสมาชิกจำนวน{" "}
              <span className="text-2xl font-bold">
                {GroupData.membersNum}
              </span>{" "}
              ID
            </p>
            {SuccessrejectGroupOnce ? (
               <p className="text-md mt-6 max-w-3xl text-indigo-100">{SuccessrejectGroupOnce}</p>
            ):(
            <p className="text-md max-w-3xl text-indigo-100">
              ค้างเชิญ{" "}
              <span className="break-all text-lg font-bold uppercase">
                {Object.keys(GroupData.inviteData).length}
              </span>{" "}
              ID
            </p>)}
            <button
              onClick={() => kickgroupreject()}
              className="focus:ring-none focus:ring-offset-none inline-flex items-center justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-indigo-500 sm:w-auto"
            >
              ยกเลิกเชิญ
            </button>
           
          </div>
          <div>
            {GroupData.picturePath && (
              <Image
                className="h-full w-auto object-cover"
                src={
                  "https://obs.line-scdn.net/" + GroupData.picturePath + ".png"
                }
                alt={GroupData.name}
                width={100}
                height={100}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
