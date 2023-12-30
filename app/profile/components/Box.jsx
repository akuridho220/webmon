import React from "react";
import Image from "next/image";

const Box = ({ nama, status, email, jabatan }) => {
    return (
        <div className="flex flex-col h-40">
            <div className="bg-primary-900 rounded-t-md shadow-md py-4 flex">
                <div className="flex-1 pl-2 flex items-center justify-center">
                    <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <h1 className="text-3xl font-sdr font-bold text-white">Profil Saya</h1>
                </div>
                <div className="flex-1 pr-2 flex items-center justify-center">
                    <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
                </div>
            </div>

            <div className="bg-putih-200 rounded-b-md shadow-md flex-1 py-4 px-2">
                <div className="py-4 flex justify-center">
                    <Image src="/img/maskot/1.png" width={150} height={200} alt="foto" />
                </div>
                <div className="flex justify-center">
                    <h1 className="text-3xl font-sdr font-bold text-black text-center">{nama}</h1>
                </div>
                <div className="flex justify-center pb-10">
                    <div className="bg-accent-900 rounded-md py-1 inline-block px-2">
                        <h1 className="text-white font-bold">{status} | {jabatan}</h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/4 px-2 pb-2">
                        <h1 className="text-black font-bold">Nama</h1>
                    </div>
                    <div className="flex-1 px-2 pb-2">
                        <h1 className="text-black font-base">{nama}</h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/4 px-2 pb-2">
                        <h1 className="text-black font-bold">Status</h1>
                    </div>
                    <div className="flex-1 px-2 pb-2">
                        <h1 className="text-black font-base">{status}</h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/4 px-2 pb-2">
                        <h1 className="text-black font-bold">Email</h1>
                    </div>
                    <div className="flex-1 px-2 pb-2">
                        <h1 className="text-black font-base">{email}</h1>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/4 px-2 pb-2">
                        <h1 className="text-black font-bold">Jabatan</h1>
                    </div>
                    <div className="flex-1 px-2 pb-2">
                        <h1 className="text-black font-base">{jabatan}</h1>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-secondary-900 text-white font-bold py-1 px-2 rounded">Ubah Password</button>
                </div>
            </div>
        </div>
    );
};

export default Box;
