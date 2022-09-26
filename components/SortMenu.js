import { Fragment } from 'react';

import React from 'react';
import { Menu, Transition } from '@headlessui/react';

import { DotsHorizontalIcon } from '@heroicons/react/solid';

export function SortMenu({
  setOpenMenu,
  setSort,
  defaultList,
  filteredListResults,
  setFilteredListResults,
  setSearchInputTerm,
}) {
  function sortPokemonBy(type) {
    let entry = 0;
    if (type === 'attack') {
      entry = 1;
    }

    if (type === 'defense') {
      entry = 2;
    }

    if (filteredListResults.length === 0) {
      const sortedPokemonList = [...defaultList].sort((a, b) => {
        return b.stats[entry].base_stat - a.stats[entry].base_stat;
      });
      setFilteredListResults(sortedPokemonList);
    }

    if (filteredListResults.length > 0) {
      const sortedPokemonList = [...filteredListResults].sort((a, b) => {
        return b.stats[entry].base_stat - a.stats[entry].base_stat;
      });
      setFilteredListResults(sortedPokemonList);
    }
  }

  function reset() {
    setSearchInputTerm('');
    setFilteredListResults([]);
  }

  return (
    <>
      <div className=''>
        <Menu as='div' className='relative inline-block text-left z-10 '>
          <div className='mt-1'>
            <Menu.Button>
              <DotsHorizontalIcon
                onClick={() => {
                  setOpenMenu(true);
                }}
                className='p-2 h-8 bg-gray-100 rounded-full transition duration-200 cursor-pointer'
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 flex flex-col gap-2 z-10 bg-white '>
                <Menu.Item
                  onClick={() => {
                    setSort(true);
                    sortPokemonBy('attack');
                  }}>
                  <button>Sort By Attack</button>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setSort(true);
                    sortPokemonBy('defense');
                  }}>
                  <button>Sort By Defense</button>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setSort(false);
                    reset();
                  }}>
                  <button>Reset</button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
}
