import NavBar from './components/NavBar';
import './App.css';
import Pokemons from './components/Pokemons';

import { Switch, Route } from "react-router-dom";
import SinglePoke from './components/SinglePoke';
import Info from './components/Info';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/pokemons">

          <Pokemons />

        </Route>
        <Route exact path="/pokemons/:id">

          <SinglePoke />

        </Route>
        <Route exact path="/pokemons/:id/:info">

          <Info />

        </Route>


      </Switch>
    </>
  );
}

export default App;
