import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export function SearchInput({
  pokemonList,
  setSearchInputTerm,
  searchInputTerm,
  setFilteredListResults,
}) {
  const FilterPokemonByTerm = (term) => {
    setSearchInputTerm(term);

    if (term !== '') {
      console.log('in');
      const filteredPokemon = pokemonList.filter((pokemon) =>
        pokemon.name.split(' ').join(' ').includes(term.toLowerCase())
      );

      setFilteredListResults(filteredPokemon);
    }

    if (term === '') {
      setFilteredListResults(pokemonList);
    }
  };
  return (
    <div className='p-2 mt-3 '>
      <div className='flex gap-2 items-center justify-center mx-auto  rounded-full '>
        <SearchIcon className='h-6 ml-6 text-gray-600 ' />
        <input
          onChange={(e) => FilterPokemonByTerm(e.target.value.toLowerCase())}
          type='text'
          className='bg-transparent w-28 p-2 outline-none'
          placeholder='Search...'
        />
      </div>
    </div>
  );
}
