import Head from "next/head";

const Search = () => {
  return (
    <>
      <Head> Search Results | Green Cloud Nine</Head>
      <div className="w-container">
        <h1>Search results</h1>
        <form action="/search" className="w-form">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            className="w-input"
            maxLength={256}
            name="query"
            placeholder="Search…"
            id="search"
            required
          />
          <input type="submit" defaultValue="Search" className="w-button" />
        </form>
      </div>
    </>
  );
};

export default Search;
