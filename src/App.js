// functions execution order constructor => render +> life cycle (componentdid mount)
// import { Component } from 'react';
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list_component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  console.log("render");
  const [searchField, setSearchfield] = useState(""); //[value, setvalue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
    setSearchfield(searchFieldstring);
  };

  return (
    <div className="App">
      <h1 className="app-title">monsters rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchchange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {

//   // initiialzes componenets state
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//   }

//   // functions executes as soon as component is mounted on the browser i.e as component is been mounted
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => this.setState(() => {
//       return { monsters: users }
//     },
//       () => {
//      }
//      ));
//   }

//   onSearchchange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const {onSearchchange} = this;
//     const filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     console.log(monsters);

//     return (
//       <div className="App">
//         <SearchBox
//         className = "search-box"
//         onChangeHandler = {onSearchchange}
//         placeholder = "Search Monsters"/>
//         <CardList monsters={filteredmonsters}/>
//       </div>
//     );
//   }
// }
export default App;
