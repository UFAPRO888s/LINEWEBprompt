import Image from "next/image";
export default function HeroInGroup({ GroupID, GroupData }) {
 // console.log(GroupData);
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover rounded-md"
          src="/img/แมวลาย.webp"
          alt="BOT LINE"
          width={100}
          height={100}
        />
        <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-14 px-6 sm:py-22 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          LINE GROUP
        </h1>
        <div className="flex gap-4">
          <div>
            <p className="mt-6 max-w-3xl text-md text-indigo-100">
              LINE กลุ่ม {GroupData.name}
              <span className="text-lg font-bold uppercase break-all">
                {GroupID.userid}
              </span>
              <br />
              มีสมาชิกจำนวน{" "}
              <span className="text-2xl font-bold">{GroupID.length}</span> ID
              
            </p>
          </div>
          <div>
            <Image
              className="h-full w-auto object-cover"
              src={
                "https://obs.line-scdn.net/" + GroupData.picturePath + ".png"
              }
              alt={GroupData.name}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
