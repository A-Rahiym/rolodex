import { useState, useEffect } from "react";
import CardList from "./src/components/card-list/card-list_component";
import SearchBox from "./src/components/search-box/search-box-component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchchange = (event) => {
    const searchFieldstring = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldstring);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onchangeHandler={onSearchchange}
        placenolder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
