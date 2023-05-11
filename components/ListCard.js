import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function ListCard({ Data }) {
  //const [NumGroup, setNumGroup] = useState("");

  return (
    <div>
      <div className="py-4">
        <div className="flex-col md:flex-row items-center justify-between">
          <h2 className="text-lg font-semibold">รายการกลุ่ม</h2>
          <div className="flex gap-4 justify-end">
            <div className="rounded-md bg-gray-900 text-white text-md font-semibold px-4 py-2">
              สร้างกลุ่มใหม่
            </div>
            <div className="rounded-md bg-gray-900 text-white text-md font-semibold px-4 py-2">
              ตั้งค่า
            </div>
            <div className="rounded-md bg-gray-900 text-white text-md font-semibold px-4 py-2">
              ตั้งค่า
            </div>
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {Object.keys(Data).map((key) => (
          <div key={key}>
            <Link href={"/group/"+Data[key].id}>
              <li className="col-span-1 rounded-lg bg-white hover:bg-green-100 shadow border-2 border-green-600">
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {Data[key].name}
                      </h3>
                      {Data[key].type == "GROUP" ? (
                        <span className="inline-block flex-shrink-0 rounded-full bg-red-300 px-2 py-0.5 text-xs font-medium text-gray-50">
                          {Data[key].type}
                        </span>
                      ) : (
                        <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          {Data[key].type}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-xs text-gray-500">
                      {Data[key].id}
                    </p>
                  </div>
                  {Data[key].picturePath ? (
                    <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={
                      "https://obs.line-scdn.net/" +
                      Data[key].picturePath +
                      ".png"
                    }
                    alt={Data[key].name} />
                  ) : (
                    <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={"/LOGO.png"} alt="LOGO LINE X" />
                  )}
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1 items-center px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      <span className="flex gap-1 items-center ml-3 text-md font-bold">
                        {Object.keys(Data[key].memberMids).length}{" "}
                        <p className="ml-2 text-xs text-start font-bold text-gray-500">
                          ID
                        </p>
                      </span>
                    </div>
                    <div className="-ml-px flex w-0 flex-1 items-center px-4 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                      {Data[key].inviteeMids && Data[key].inviteeMids ? (
                        <span className="flex gap-1 items-center ml-3 text-md font-bold">
                          {Object.keys(Data[key].inviteeMids)?.length}
                          <p className="ml-2 text-xs text-start font-bold text-gray-500">
                            {" "}
                            ID
                          </p>
                        </span>
                      ) : (
                        <p className="ml-2 text-xs font-bold text-green-500">
                          ไม่มีค้างเชิญ
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
