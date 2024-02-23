'use client';

import React, { useState, useEffect } from 'react';
import { Progress, Button } from '@nextui-org/react';
import Link from 'next/link';

const ProgressKueKab = ({ kabupaten, totalSampel, Selesai }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (Selesai / totalSampel < 0.5) {
      setColor('danger');
    } else if (Selesai / totalSampel >= 0.5 && Selesai / totalSampel < 0.8) {
      setColor('warning');
    } else if (Selesai / totalSampel >= 0.8) {
      setColor('success');
    }
  }, [totalSampel, Selesai]);

  let percent;

  if (totalSampel == 0) {
    percent = 0;
  } else {
    percent = (Selesai / totalSampel) * 100;
  }

  return (
    <>
      <div className="w-full mx-auto bg-white rounded-xl text-hitam-100 shadow-md pb-4 overflow-hidden">
        <div className="font-semibold text-base flex w-[98%] mx-auto items-center overflow-hidden">
          <div className=" mx-4 my-4 space-y-4 w-full">
            <p className="font-semibold text-lg md:text-xl">{kabupaten}</p>
            <div className="w-full rounded-lg shadow-sm md:text-base text-sm relative">
              <Progress size="xl" label="Kuesioner terisi" isStriped value={percent} color={color} showValueLabel={true} className="max-w-full" />
            </div>
            <div className="font-light text-start">
              <p>
                Kurang: {totalSampel - Selesai} dari total {totalSampel}
              </p>
            </div>
            <div className="justify-start flex">
              <Link href="/riset/progres/progres-wilayah">
                <Button className="hover:border-secondary-700 hover:bg-transparent hover:border-spacing-4 hover:text-secondary-700 bg-secondary-700 text-white transition-all" variant="ghost">
                  Lihat Detail
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressKueKab;
