import { useState, useEffect } from 'react';
import {
  Banner,
  SearchInput,
  PokemonListView,
  Footer,
  Modal,
  LoadingSpinner,
} from '../components';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState(false);

  const [defaultList, setDefaultList] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [filteredListResults, setFilteredListResults] = useState([]);
  const [searchInputTerm, setSearchInputTerm] = useState('');

  useEffect(() => {
    async function getPokemonList() {
      try {
        setError(false);
        setLoading(true);
        let total = 200;
        const response = await fetch(`/api/getPokemon?total=${total}`);
        const data = await response.json();
        setDefaultList(data);
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
      <div className='h-max m-4 p-3 rounded-lg shadow-md shadow-yellow-200 border-2  border-yellow-200'>
        <header>
          <Banner />
          {!loading && (
            <SearchInput
              defaultList={defaultList}
              setDefaultList={setDefaultList}
              filteredListResults={filteredListResults}
              setFilteredListResults={setFilteredListResults}
              setSearchInputTerm={setSearchInputTerm}
              searchInputTerm={searchInputTerm}
              setSort={setSort}
            />
          )}
        </header>
        <main>
          {loading && <LoadingSpinner />}
          {/* loads default list when no pokemon is found via search */}
          {searchInputTerm.length > 0 && filteredListResults.length === 0 && (
            <section>
              <p className='text-center text-2xl px-4 text-blue-800'>
                There are no pokemon matching your search.
              </p>
              {
                <PokemonListView
                  pokemonListData={defaultList}
                  setOpenModal={setOpenModal}
                  setModalContent={setModalContent}
                />
              }
            </section>
          )}
          {/* if api breaks during user experience or when app mounts */}
          {error && (
            <section className='grid place-items-center mb-5 '>
              <p className='text-center px-4 text-2xl text-blue-800'>
                Cannot get new pokemon data from server, please try again later.
              </p>
            </section>
          )}
          <section>
            {/*default view when app mounts */}
            {searchInputTerm.length < 1 && (
              <PokemonListView
                pokemonListData={
                  filteredListResults.length > 0
                    ? filteredListResults
                    : defaultList
                }
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
              />
            )}

            {/*pokemon filter when search box has at least 1 character */}
            {searchInputTerm.length >= 1 && !sort && (
              <PokemonListView
                pokemonListData={
                  filteredListResults.length < 1
                    ? defaultList
                    : filteredListResults
                }
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
              />
            )}

            {/*sorting via menu */}
            {sort && (
              <PokemonListView
                pokemonListData={filteredListResults}
                setOpenModal={setOpenModal}
                setModalContent={setModalContent}
              />
            )}
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
