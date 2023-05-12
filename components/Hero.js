import Image from "next/image";
export default function Hero({ UserpictureUrl, NameBot, numGroup }) {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src="/img/แมวลาย.webp"
          alt="BOT CAT LINE"
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
          LINE SELFBOT
        </h1>
        <div className="flex gap-4">
          <div className="text-md mt-6 max-w-3xl text-indigo-100">
            LINE ID
            {/* <p className="text-md font-bold uppercase break-all">{UserID}</p> */}
            <div className="break-all text-lg font-bold uppercase">
              {NameBot}
            </div>
            <p className="break-all text-lg font-bold uppercase">
              มีจำนวน <span className="text-2xl font-bold">{numGroup}</span>{" "}
              ห้อง
            </p>
            ช่วยให้คุณใช้งาน LINE ได้มากกว่า
          </div>
          <div className="flex items-end">
            {UserpictureUrl && (
              <Image
                src={UserpictureUrl}
                alt="แมวลาย"
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
