'use client';
import React, { useState } from 'react';
import Layout from '@/app/layout/layout';
import Header from  './components/Header';
import Table from './components/tableDetail';
import Box from './components/Box';

export default function DetailListing({params}) {
  
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-[95%] mx-auto rounded-xl space-y-4  px-6 pb-5 bg-primary-700/70">
          <Box />
          <Header />
            <div className="w-full">
              <Table />
            </div>
        </div>
        {params.kat}
        {params.id}
      </Layout>
    </>
  );
}
