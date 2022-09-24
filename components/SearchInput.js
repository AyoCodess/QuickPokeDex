import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export function SearchInput() {
  return (
    <div className='p-2 mt-3 '>
      <div className='flex gap-2 items-center justify-center mx-auto  rounded-full '>
        <SearchIcon className='h-6 ml-6 text-gray-600 ' />
        <input
          type='text'
          className='bg-transparent w-28 p-2 outline-none'
          placeholder='Search...'
        />
      </div>
    </div>
  );
}
