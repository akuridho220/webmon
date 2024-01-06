'use server';
import { NextResponse } from "next/server";
import {PrismaClient} from '@/prisma/generated/client';

const prisma = new PrismaClient();

const getData = async () => {
    const data = await prisma.$queryRaw
    `
    SELECT
        rumahtangga.no_bs AS kode_bs,
        MIN(posisi_pcl.nim) AS nim,
        MIN(mahasiswa.nama) AS nama_pcl,
        COUNT(*) AS jumlah_listing
    FROM
        rumahtangga
    LEFT JOIN bloksensus ON bloksensus.no_bs = rumahtangga.no_bs
    LEFT JOIN posisi_pcl ON posisi_pcl.nim = bloksensus.nim_pencacah
    LEFT JOIN mahasiswa ON mahasiswa.nim = bloksensus.nim_pencacah
    GROUP BY
        rumahtangga.no_bs
    ORDER BY
        rumahtangga.no_bs DESC
    `;

    return data;
}

export const GET = async () => {
    const res = await getData();
    BigInt.prototype.toJSON = function() {       
        return this.toString()
    }
    return NextResponse.json(res);
};