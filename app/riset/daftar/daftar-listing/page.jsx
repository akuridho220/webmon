import React from 'react';
import Layout from '@/app/layout/layout';
import Box from './components/Box';
import SelectTabel from './components/SelectTable';

export default function DaftarListing() {
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <Box />
        <SelectTabel />
      </Layout>
    </>
  );
}
