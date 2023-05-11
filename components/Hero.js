import Image from "next/image";
export default function Hero({UserID,numGroup}) {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
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
          LINE SELFBOT
        </h1>
        <p className="mt-6 max-w-3xl text-md text-indigo-100">
          LINE ID
          <br/><span className="text-lg font-bold uppercase break-all">{UserID}</span> 
          <br/>มีจำนวน <span className="text-2xl font-bold">{numGroup}</span> ห้อง
          <br/>ช่วยให้คุณใช้งาน LINE ได้มากกว่า
        </p>
      </div>
    </div>
  );
}
