import Home from './pages/Home'

/* router */
import { Route } from 'react-router-dom';

/*Styled components */
import GlobalStyles from './components/GlobalStyles'

import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <GlobalStyles />
      <NavBar/>

      <Route path={["/game/:id","/"]}>
        <Home />

      </Route>

    </div>
  );
}

export default App;
