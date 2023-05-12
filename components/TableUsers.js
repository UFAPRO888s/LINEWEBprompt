import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TableUsers({ UserXdata, GroupData }) {
  const router = useRouter();
  const [SuccessKickGroupOnce, setSuccessKickGroupOnce] = useState();
  // const [SuccessKickGroupUser, setSuccessKickGroupUser] = useState();

  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // useEffect(() => {
  //   return () => {};
  // }, []);

  const kickOnceUsers = async () => {
    try {
      const response = await fetch("http://45.154.24.65:5430/groupkonce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gid: GroupData.id, ck: checked }),
      });

      const result = await response.json();
      if (result) {
        setSuccessKickGroupOnce(result.ck);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const kickGroupKUser = async (userid) => {
    try {
      const response = await fetch("http://45.154.24.65:5430/groupkuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gid: GroupData.id, uid: userid }),
      });

      const result = await response.json();
      if (result) {
        setSuccessKickGroupOnce([result.uid]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const kickGroupKAll = async () => {
    try {
      const response = await fetch("http://45.154.24.65:5430/groupkall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gid: GroupData.id }),
      });

      const result = await response.json();
      if (result) {
        router.push("/");
       // setSuccessKickGroupOnce();

      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //console.log(GroupData);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-xl font-semibold text-gray-900">เตะมัน</h2>
          <p className="mt-2 text-sm text-gray-700">
            การยึดห้อง line ไม่มีความผิด ไม่ต้องกลัว
            กลัวส้นตีนเจ้าของห้องจะดีกว่า
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex-none">
            <button
              type="button"
              onClick={kickOnceUsers}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-none focus:ring-indigo-500 focus:ring-offset-none sm:w-auto"
            >
              KICK FIRST
            </button>
          </div>
          <div className="flex-none">
            <button
              type="button"
              onClick={kickGroupKAll}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              KICK ALL
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      รูป/ชื่อ LINE
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ID ผู้ใช้/วันที่สร้าง
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ไปก่อน
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">KICK</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {UserXdata.membersIDX?.map((person, indexmember) => {
                    const resCheck = SuccessKickGroupOnce?.filter((memXber) =>
                      memXber.includes(person.userid)
                    );

                    return (
                      <tr key={indexmember}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {person.picturePath ? (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={
                                    "https://obs.line-scdn.net/" +
                                    person.picturePath +
                                    ".png"
                                  }
                                  alt={person.displayDataUser.replace(
                                    /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu,
                                    ""
                                  )}
                                />
                              ) : (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={"/LOGO.png"}
                                  alt={person.displayDataUser.replace(
                                    /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu,
                                    ""
                                  )}
                                />
                              )}
                            </div>
                            <div className="flex relative ">
                              {person.typeUser == "PROMOTION_BOT" ? (
                                <Image
                                  src={"/img/bot.png"}
                                  alt="bot"
                                  width={100}
                                  height={100}
                                  className="absolute h-10 w-10 -left-4 -top-3 "
                                />
                              ) : (<p className="absolute h-10 w-auto -left-4 -top-3 text-gray-400 text-xs">{person.typeUser}</p>)}
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {person.displayDataUser.replace(
                                    /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
                                    ""
                                  )}
                                </div>
                                <div className="text-gray-500 text-xs">
                                  {person.statusMessage
                                    .slice(0, 20)
                                    .replace(
                                      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu,
                                      ""
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">{person.userid}</div>
                          <div className="text-gray-500 text-xs">
                            สร้างเมื่อ{" "}
                            {new Date(person.createdTime).toLocaleString(
                              "th-TH"
                            )}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {!resCheck?.[0] ? (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              พร้อมออกจากห้อง
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                              ออกจากห้องไปแล้ว
                            </span>
                          )}
                        </td>
                        <td className="flex gap-4 items-center whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {GroupData.groupExtracreator == person.userid ? (
                            <Image
                              className="h-8 w-8 rounded-full p-1"
                              src={"/img/head.png"}
                              alt="headgroup"
                              width={100}
                              height={100}
                            />
                          ) : null}
                          <div className="ml-3 flex h-5 items-center">
                            {!resCheck?.[0] && (
                              <input
                                id={`person-${person.userid}`}
                                name={`person-${person.userid}`}
                                type="checkbox"
                                value={person.userid}
                                onChange={handleCheck}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            )}
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          {!resCheck?.[0] && (
                            <button
                              onClick={() => kickGroupKUser(person.userid)}
                              //onClick={(event) => kickGroupkuser('hello')}
                              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-bold text-gray-800 shadow-sm hover:bg-red-500 focus:outline-none focus:ring-none focus:ring-indigo-500 focus:ring-offset-none sm:w-auto"
                            >
                              KICK
                              <span className="sr-only">
                                {person.displayDataUser}
                              </span>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
