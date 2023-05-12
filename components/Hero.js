import Image from "next/image";
export default function Hero({UserID,NameBot,numGroup}) {
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
      <div className="relative mx-auto max-w-7xl py-14 px-6 sm:py-22 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          LINE SELFBOT
        </h1>
        <div className="mt-6 max-w-3xl text-md text-indigo-100">
          LINE ID
          <p className="text-md font-bold uppercase break-all">{UserID}</p> 
          <p className="text-lg font-bold uppercase break-all">{NameBot}</p>
          <p className="text-lg font-bold uppercase break-all">มีจำนวน <span className="text-2xl font-bold">{numGroup}</span> ห้อง</p>
          ช่วยให้คุณใช้งาน LINE ได้มากกว่า
        </div>
      </div>
    </div>
  );
}
