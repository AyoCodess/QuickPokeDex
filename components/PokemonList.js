/* eslint-disable @next/next/no-img-element */
import React from 'react';
export function PokemonList({ defaultList, setOpenModal, setModalContent }) {
  console.log(defaultList);
  return (
    <ul className='flex flex-col gap-3 mt-6'>
      {defaultList.map((pokemon, index) => {
        // name transformation
        let firstLetter = pokemon.name.split('')[0].toUpperCase();
        const formattedName = [...firstLetter, pokemon.name.slice(1)].join('');
        return (
          <li
            key={index}
            onClick={() => {
              setOpenModal(true);
              setModalContent(
                <>
                  <p className='flex justify-center text-2xl'>
                    {formattedName}
                  </p>
                  <div className='flex justify-center items-center '>
                    <img
                      className='w-40'
                      src={pokemon.imageFront}
                      alt={pokemon.name}
                    />
                    <img
                      className='w-40'
                      src={pokemon.imageBack}
                      alt={pokemon.name}
                    />
                  </div>
                </>
              );
            }}
            className='flex items-center justify-between p-4 border rounded-lg border-gray-400 shadow'>
            <div>
              <p className='flex flex-col  items-center'>
                <h2 className='text-xl'>{formattedName} </h2>{' '}
                <span className='italic'>{pokemon.type.join(', ')}</span>
              </p>
              <p className='mt-3'>
                {pokemon.stats.map((stat, i) => {
                  return (
                    <ul key={i}>
                      <li className='text-xs flex gap-2'>
                        <span>{stat.stat.name}:</span>{' '}
                        <span className='font-bold'>{stat.base_stat}</span>
                      </li>
                    </ul>
                  );
                })}
              </p>
            </div>
            {pokemon.id <= 151 && (
              <img
                src={`/sprites/${pokemon.id}.svg`}
                className='w-28 h-28'
                alt={pokemon.name}
              />
            )}
            {pokemon.id > 151 && (
              <img
                src={pokemon.imageFront}
                className='w-28 h-28'
                alt={pokemon.name}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
