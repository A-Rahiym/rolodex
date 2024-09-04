// functions execution order constructor => render +> life cycle (componentdid mount)
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list_component';


class App extends Component {

  // initiialzes componenets state
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  // functions executes as soon as component is mounted on the browser i.e as component is been mounted
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) => this.setState(() => {
      return { monsters: users }
    },
      () => {
      },
     ));
  }

  onSearchchange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchchange } = this;
    const filteredmonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search monsters' onChange=
          {onSearchchange}
        />
        <CardList monsters={filteredmonsters}/>
      </div>
    );
  }
}
export default App;