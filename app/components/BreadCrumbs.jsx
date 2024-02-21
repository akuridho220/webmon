'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Icon from 'react-feather';

const BreadCrumbs = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const nama = searchParams.get('nama');
  const path = currentPath.split('/').filter((p) => p !== '');
  const dontShow = ['riset', 'daftar', 'detail-listing', 'bs', 'desa', 'kec', 'kab', 'detail-sampel', 'detail', 'progres'];
  return (
    <div className={`flex flex-row text-sm pt-2 w-full justify-start`}>
      {path.map((p, index) => {
        const url = `/${path.slice(0, index + 1).join('/')}`;
        const isLast = index === path.length - 1;

        if (dontShow.includes(p)) {
          return null; // Skip rendering this breadcrumb
        }

        if (nama !== null && isLast) {
          // Append nama parameter if nama is not null and it's the last breadcrumb
          const finalUrl = `${url}?nama=${nama}`;
          return (
            <span className="flex flex-row" key={index}>
              <Link href={finalUrl}>
                <span className={isLast ? 'font-bold' : ''}>{p}</span>
              </Link>
              {!isLast && (
                <span>
                  <Icon.ChevronRight />
                </span>
              )}
            </span>
          );
        } else {
          return (
            <span className="flex flex-row" key={index}>
              <Link href={url}>
                <span className={isLast ? 'font-bold' : ''}>{isLast ? p : `${p}`}</span>
              </Link>
              {!isLast && (
                <span>
                  <Icon.ChevronRight />
                </span>
              )}
            </span>
          );
        }
      })}
    </div>
  );
};
export default BreadCrumbs;
