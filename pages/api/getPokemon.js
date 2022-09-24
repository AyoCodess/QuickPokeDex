// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import App from 'next/app';

export default async function getPokemonList(req, res) {
  let errorMessage = '';

  try {
    // get Pokemon Names
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${
        req.query.total === '0' ? 151 : req.query.total
      }`
    );

    if (!response.ok) {
      errorMessage =
        'Could not get list of Pokemon names, please try again later';
    }

    const data = await response.json();

    const listOfPokemonNames = data.results.map((pokemon) => pokemon.name);

    // get relevant details for each pokemon in list
    const getPokemonData = await Promise.all(
      listOfPokemonNames.map(async (pokemonName) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!response.ok) {
          errorMessage =
            'Could not transform Pokemon data, please try again later';
        }

        const data = await response.json();

        return {
          name: pokemonName,
          id: data.id,
          type: data.types.map((type) => type.type.name),
          stats: data.stats,
          imageFront: data.sprites.front_default,
          imageBack: data.sprites.back_default,
        };
      })
    );

    res.status(200).json(getPokemonData);
  } catch (error) {
    res
      .status(404)
      .json({ customError: errorMessage, defaultError: error.message });
  }
}
