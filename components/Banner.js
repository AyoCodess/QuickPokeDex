/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

export function Banner() {
  return (
    <div className='relative max-w-[20rem] mx-auto mt-2'>
      <p className='absolute top-[-0.5rem] left-[2rem] text-4xl font-black text-blue-800'>
        Quick
      </p>
      <img src='/images/logo.png' className='w-[14rem] mx-auto' alt='logo' />
      <p className='absolute top-[3.5rem] right-[3rem] text-4xl font-black  text-yellow-500'>
        Dex
      </p>
    </div>
  );
}
