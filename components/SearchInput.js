import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { SortMenu } from './SortMenu';

export function SearchInput({
  defaultList,
  setDefaultList,
  filteredListResults,
  setFilteredListResults,
  searchInputTerm,
  setSearchInputTerm,
  setSort,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  const FilterPokemonByTerm = (term) => {
    setSearchInputTerm(term);

    if (term !== '') {
      const filteredPokemon = defaultList.filter((pokemon) =>
        pokemon.name.split(' ').join(' ').includes(term.toLowerCase())
      );

      const filteredPokemonTypes = defaultList.filter((pokemon) => {
        return pokemon.type.join(', ').includes(term.toLowerCase());
      });

      setFilteredListResults([
        ...new Set([...filteredPokemon, ...filteredPokemonTypes]),
      ]);
    }

    if (term === '') {
      setFilteredListResults(defaultList);
    }
  };
  return (
    <div className='p-2 mt-3 '>
      <div className='flex gap-2 items-center justify-center mx-auto  rounded-full '>
        <SearchIcon className='h-6 ml-6 text-gray-600 ' />
        <input
          value={searchInputTerm}
          onChange={(e) => FilterPokemonByTerm(e.target.value.toLowerCase())}
          type='text'
          className='bg-transparent w-28 p-2 outline-none'
          placeholder='Search...'
        />
        <SortMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setSort={setSort}
          setDefaultList={setDefaultList}
          defaultList={defaultList}
          filteredListResults={filteredListResults}
          setFilteredListResults={setFilteredListResults}
          setSearchInputTerm={setSearchInputTerm}
        />
      </div>
    </div>
  );
}
