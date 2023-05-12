import Image from "next/image";
export default function HeroInGroup({ GroupID, GroupData }) {
  //console.log(GroupData);
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
              LINE กลุ่ม {GroupData.groupName}
              <span className="break-all text-lg font-bold uppercase">
                {GroupID.userid}
              </span>
              <br />
              มีสมาชิกจำนวน{" "}
              <span className="text-2xl font-bold">{GroupData.membersNum}</span> ID
            </p>
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
