import Image from 'next/image';

export default function Box() {
  return (
    <div className="w-[85%] mx-auto flex my-4 rounded-xl bg-primary-600 mt-10 p-4 justify-between">
      <Image src="/img/pattern/pattern3-crop.png" width={50} height={32} alt="patt2cr" />
      <div className="flex items-center text-white px-4">
        <p className="mx-auto font-medium font-sdr text-3xl">Progress Listing Survei </p>
      </div>
      <Image src="/img/pattern/pattern3-crop.png" width={50} height={32} alt="patt2cr" />
    </div>
  );
}
