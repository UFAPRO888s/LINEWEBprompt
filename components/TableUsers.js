import Image from "next/image";
export default function TableUsers({ UserXdata, GroupData }) {
 
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
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            KICK ALL
          </button>
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
                  {UserXdata.membersIDX?.map((person, indexmember) => (
                    <tr key={indexmember}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            {person.picturePath ? (
                              <Image
                                className="h-10 w-10 rounded-full"
                                src={
                                  "https://obs.line-scdn.net/" +
                                  person.picturePath +
                                  ".png"
                                }
                                alt={person.displayDataUser.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')}
                                width={100}
                                height={100}
                              />
                            ) : (
                              <Image
                                className="h-10 w-10 rounded-full"
                                src={"/LOGO.png"}
                                alt={person.displayDataUser.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')}
                                width={100}
                                height={100}
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.displayDataUser.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')}
                            </div>
                            <div className="text-gray-500 line-clamp-1">
                              {person.statusMessage.slice(0, 20).replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])|[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{person.userid}</div>
                        <div className="text-gray-500">
                          {new Date(person.createdTime).toLocaleString(
                            "th-TH",
                            { timeZone: "Asia/Bangkok" }
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          พร้อมออกจากห้อง
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {GroupData.groupExtracreator == person.userid ? (
                          <Image
                            className="h-8 w-8 rounded-full p-1"
                            src={"/img/head.png"}
                            alt={"head"}
                            width={100}
                            height={100}
                          />
                        ) : null}
                        <div className="ml-3 flex h-5 items-center">
                        <input
                          id={`person-${person.userid}`}
                          name={`person-${person.userid}`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          KICK
                          <span className="sr-only">
                            , {person.displayDataUser}
                          </span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
