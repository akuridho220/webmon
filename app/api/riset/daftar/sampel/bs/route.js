'use server';
import { NextResponse } from "next/server";

import {PrismaClient as PrismaClientRiset} from '@/prisma/generated/riset';

const riset = new PrismaClientRiset();

const getData = async () => {
    const sampel = await riset.$queryRaw
    `
    SELECT
        datast.kodeBs AS kode_bs,
        MIN(datast.kodeRuta) AS kode_ruta,
        MIN(posisi_pcl.nim) AS nim,
        MIN(posisi_pcl.nama) AS nama_pcl,
        COUNT(*) AS jumlah_sampel
    FROM
        datast
    LEFT JOIN rumahtangga ON rumahtangga.kodeRuta = datast.kodeRuta
    LEFT JOIN bloksensus ON bloksensus.id = rumahtangga.kodeBs
    LEFT JOIN posisi_pcl ON posisi_pcl.nim = bloksensus.nim
    GROUP BY
        kode_bs
    ORDER BY
        kode_bs DESC
    `;

    return sampel;
}

export const GET = async () => {
    const res = await getData();
    BigInt.prototype.toJSON = function() {       
        return this.toString()
    }
    return NextResponse.json(res);
};