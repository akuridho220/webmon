import Image from "next/image"


export default function Box(){
    return(
        <div className="flex w-5/6 items-center justify-center bg-gradient-to-b from-[#951A2E] to-[#CA2128] rounded-md shadow-md py-4 px-2 mt-10 text-white">
            <div className="flex-1 pl-2 flex items-center justify-center">
                    <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <h1 className="text-3xl font-sdr font-bold text-white">Daftar Sampel</h1>
                </div>
                <div className="flex-1 pr-2 flex items-center justify-center">
                    <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
                </div>
        </div>
    )
}