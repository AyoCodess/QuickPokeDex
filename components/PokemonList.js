/* eslint-disable @next/next/no-img-element */
import React from 'react';
export function PokemonList({ defaultList }) {
  console.log(defaultList);
  return (
    <div className='flex flex-col gap-3 mt-6'>
      {defaultList.map((pokemon, index) => {
        // name transformation
        let firstLetter = pokemon.name.split('')[0].toUpperCase();
        const formattedName = [...firstLetter, pokemon.name.slice(1)].join('');
        return (
          <ul
            key={index}
            className='flex items-center justify-between p-4 border rounded-lg border-gray-400 shadow'>
            <li>
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
            </li>
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
          </ul>
        );
      })}
    </div>
  );
}
