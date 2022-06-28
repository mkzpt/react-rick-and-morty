import React, { useState, useEffect } from "react";
import Character from "./Character";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loadin, setLoadin] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoadin(false);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      
      <NavPage page={page} setPage={setPage} />

      <div className="row">
        {loadin ? <h1>Loading...</h1> : null}

        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}


function NavPage(props) {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <p>Page: {props.page}</p>
        <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>Page {props.page + 1}</button>
      </header>
    );
  }
