'use server';
import { NextResponse } from "next/server";

import {PrismaClient} from '@/prisma/generated/client';

const prisma = new PrismaClient();

const getData = async () => {
    const data = await prisma.$queryRaw
    `
    SELECT
        MIN(rumahtangga.no_bs) AS kode_bs,
        bloksensus.id_kec AS kode_kecamatan,
        MIN(kecamatan.nama_kec) AS nama_kecamatan,
        COUNT(*) AS jumlah_listing
    FROM
        rumahtangga
    LEFT JOIN bloksensus ON bloksensus.no_bs = rumahtangga.no_bs
    LEFT JOIN kecamatan ON kecamatan.id_kec = bloksensus.id_kec
    GROUP BY
        bloksensus.id_kec
    ORDER BY
        bloksensus.id_kec DESC
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