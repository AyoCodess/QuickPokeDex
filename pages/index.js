import getPokemonList from './api/getPokemon';
import { useState, useEffect } from 'react';
import {
  Banner,
  SearchInput,
  PokemonList,
  Footer,
  Modal,
  LoadingSpinner,
} from '../components';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [pokemonList, setPokemonList] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [filteredListResults, setFilteredListResults] = useState([]);
  const [searchInputTerm, setSearchInputTerm] = useState('');

  useEffect(() => {
    async function getPokemonList() {
      try {
        setError(false);
        setLoading(true);
        let total = 155;
        const response = await fetch(`/api/getPokemon?total=${total}`);
        const data = await response.json();
        setPokemonList(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPokemonList();
  }, []);

  return (
    <>
      <div className=' h-max m-4 p-3 rounded-lg shadow-md border-2  border-gray-200'>
        <header>
          <Banner />
          <SearchInput
            pokemonList={pokemonList}
            setFilteredListResults={setFilteredListResults}
            setSearchInputTerm={setSearchInputTerm}
            searchInputTerm={searchInputTerm}
          />
        </header>
        {searchInputTerm.length > 0 && filteredListResults.length === 0 && (
          <main className='grid place-items-center mt-5 text-2xl  '>
            <section>
              <p className='text-center px-4 text-blue-800'>
                There are no pokemon matching your search.
              </p>
            </section>
          </main>
        )}

        <main>
          <section>
            {/* if api breaks during user experience or when app mounts */}
            {error && (
              <section className='grid place-items-center mb-5 text-2xl'>
                <p className='text-center px-4 text-blue-800'>
                  Cannot get new pokemon data from server, please try again
                  later.
                </p>
              </section>
            )}
            {/*default view when app mounts */}
            {pokemonList && searchInputTerm.length < 1 && (
              <PokemonList
                pokemonList={pokemonList}
                filteredListResults={filteredListResults}
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
              />
            )}

            {/*pokemon filter when search box has at least 1 character */}
            {searchInputTerm.length >= 1 && (
              <PokemonList
                pokemonList={filteredListResults}
                filteredListResults={filteredListResults}
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
              />
            )}
            {loading && <LoadingSpinner />}
          </section>
        </main>
        <Footer />
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalContent={modalContent}
      />
    </>
  );
}
