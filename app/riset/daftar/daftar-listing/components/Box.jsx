import Image from 'next/image';

export default function Box() {
  return (
    <div className="w-[90%] mx-auto flex my-4 rounded-xl bg-gradient-to-b from-[#951A2E] to-[#CA2128] mt-10 p-4 justify-between">
      <div className="w-1/12 h-full relative">
        <Image src="/img/pattern/pattern3-crop.png" fill={true} alt="patt2cr" />
      </div>
      <div className="flex items-center text-white px-4">
        <p className="mx-auto font-medium font-sdr md:text-3xl text-2xl text-center">Progress Listing Survei </p>
      </div>
      <div className="w-1/12 h-full relative">
        <Image src="/img/pattern/pattern3-crop.png" fill={true} alt="patt2cr" />
      </div>
    </div>
  );
}
