import Image from "next/image"

export default function PageTitle({ judul }) {
    return (
        <div className="
            w-[90%] py-4 px-2 mt-10
            flex items-center justify-between
            bg-gradient-to-b from-primary-900 to-primary-900/95
            rounded-xl shadow-md text-white
        ">
            <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
            <h1 className="text-3xl font-sdr font-bold text-white">{judul}</h1>
            <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
    )
}