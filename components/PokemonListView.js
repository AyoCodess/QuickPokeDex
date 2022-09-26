/* eslint-disable @next/next/no-img-element */
import React from 'react';
export function PokemonListView({
  pokemonListData,
  setOpenModal,
  setModalContent,
}) {
  return (
    <ul className='flex flex-col gap-3 mt-6 md:max-w-7xl sm:mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {pokemonListData.map((pokemon, index) => {
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
            className='flex items-center justify-between p-4 border rounded-lg  shadow-md'>
            <div>
              <section className='flex flex-col  items-center'>
                <h2 className='text-2xl text-blue-800 font-medium'>
                  {formattedName}{' '}
                </h2>{' '}
                <span className='italic'>{pokemon.type.join(', ')}</span>
              </section>
              <section className='mt-3'>
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
              </section>
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
