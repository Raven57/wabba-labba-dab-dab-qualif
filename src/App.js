import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Detail from './pages/detail/Detail';
import Favourite from './pages/favourite/Favourite';
import List from './pages/list/List';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router >
      <Switch>
        <Route path="/favourite">
          <Favourite/>
        </Route>
        <Route path="/detail/:id">
          <Detail/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/">
            <List/>
        </Route>
      </Switch>
      <Navbar/>
    </Router>
  );
}

export default App;
