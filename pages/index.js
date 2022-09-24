import getPokemonList from './api/getPokemon';
import { useState, useEffect } from 'react';
import { Banner, SearchInput, PokemonList, Footer } from '../components';

export default function Home() {
  const [defaultList, setDefaultList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function getPokemonList() {
      try {
        let total = 155;
        const response = await fetch(`/api/getPokemon?total=${total}`);
        const data = await response.json();
        setDefaultList(data);
      } catch (err) {
        console.error(err);
      }
    }
    getPokemonList();
  }, []);

  return (
    <div className=' h-max m-4 p-3 rounded-lg shadow-md border-2  border-gray-200'>
      <header>
        <Banner />
        <SearchInput />
      </header>
      <main>
        <PokemonList defaultList={defaultList} filteredList={filteredList} />
      </main>
      <Footer />
    </div>
  );
}
