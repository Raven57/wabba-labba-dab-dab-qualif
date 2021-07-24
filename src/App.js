import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Detail from './pages/detail/Detail';
import Favourite from './pages/favourite/Favourite';
import List from './pages/list/List';
import Search from './pages/search/Search';
// import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar euismod massa non maximus. Sed eget eros finibus, fringilla dui at, tristique elit. Integer id erat interdum, fermentum nulla non, convallis massa. Fusce hendrerit sapien a suscipit rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sodales elit vitae nulla hendrerit, ac interdum lacus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ligula aliquam, molestie nunc et, pharetra lectus. Nunc bibendum at arcu ac iaculis. Aenean at nunc in nunc posuere rhoncus nec at risus. Nunc at diam nisl.

Curabitur sodales dui ante, vel ultrices magna mollis at. Phasellus sed mi ac tortor pulvinar ullamcorper vel vitae mi. Nunc sed nunc sed quam fermentum porttitor. Nullam feugiat vehicula ullamcorper. Proin facilisis ac erat et suscipit. Proin imperdiet eleifend finibus. Integer elementum ipsum ut nunc luctus fermentum. Curabitur finibus nunc sed eros hendrerit, ut varius dolor scelerisque. In tempor ex nec dolor fermentum ultricies. Maecenas venenatis accumsan leo sit amet eleifend. Nulla quis vehicula mi, sed placerat justo. Aenean non orci at enim semper tristique at eu nisi. Maecenas tincidunt velit at sapien viverra, ut dignissim risus luctus. Nunc malesuada dolor nisi, non tempor dolor aliquam ut.
<div class="sticky top-5">HEHE</div>
      <br/><br/><br/><br/>
Aenean venenatis sapien diam, et dignissim leo gravida sit amet. Proin quis porttitor ex. Donec et nibh eget ipsum euismod ultrices. Cras auctor turpis ac facilisis viverra. Donec justo dolor, pellentesque a erat sed, commodo fringilla neque. Suspendisse vestibulum interdum dolor, ac dictum lectus fermentum et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus pellentesque elementum nulla, vitae pharetra turpis. Morbi laoreet mi et mollis tristique. Ut nec luctus neque. Duis sollicitudin vehicula aliquam. Suspendisse et orci sed lectus efficitur euismod. Sed sit amet ligula egestas, porta odio vel, tincidunt erat. Vivamus convallis magna id molestie posuere. Mauris non auctor tortor.

Nullam ut tortor iaculis, sagittis elit consectetur, consectetur odio. Cras eu ultricies libero. Quisque id lacus volutpat, fermentum ante dapibus, dictum ligula. Suspendisse nec consectetur lectus. Donec tincidunt vitae tortor at pulvinar. Nam mollis, neque a mattis imperdiet, turpis diam rhoncus nisi, nec sollicitudin nulla metus vel urna. Mauris nulla neque, blandit non dui ac, fermentum eleifend tortor. Nunc orci ante, vehicula quis risus quis, tincidunt sodales sapien. Nulla id enim auctor, varius leo et, finibus tellus. Etiam mattis, felis id luctus tristique, quam odio egestas ante, sit amet tempor mi metus nec elit.

Mauris euismod dolor eu nisl rhoncus, at vestibulum ex elementum. Curabitur porta lacinia nulla sit amet feugiat. Ut mollis laoreet massa eget aliquet. Suspendisse cursus lorem sit amet lacinia sollicitudin. Donec turpis magna, vulputate a leo ac, consequat sollicitudin ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur vulputate nisi ipsum, ac vehicula dui viverra in. Proin ac accumsan mauris. Sed et eros quis libero bibendum semper eu pretium justo. Nam sed turpis vitae massa pulvinar pulvinar. Sed nec convallis metus. Aenean vitae vehicula justo.
    
</p>
      <Switch>

        <Route path="/favourite">
          <Favourite/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/">
            <List/>
            {/* page here */}
        </Route>
      </Switch>
      {/* <Navbar/> */}
    </Router>
  );
}

export default App;
