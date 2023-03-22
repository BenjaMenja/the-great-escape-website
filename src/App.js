import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/HeaderContent/MyNavbar";
import TitleImage from "./components/HeaderContent/TitleImage";
import Home from "./pages/home";
import People from "./pages/people";
import Download from "./pages/download";
import Design from "./pages/design";
import Environment from "./pages/design/environment";
import Characters from "./pages/design/characters";
import Objects from "./pages/design/objects";

function App() {

  return (
    <div className="App">
      <header>
          <TitleImage padding={'2rem'}/>
          <MyNavbar />
      </header>
        <Router>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/people'} element={<People />} />
                <Route exact path={'/design'} element={<Design />} />
                    <Route path={'/design/environment'} element={<Environment />} />
                    <Route path={'/design/characters'} element={<Characters />} />
                    <Route path={'/design/objects'} element={<Objects />} />
                <Route exact path={'/download'} element={<Download />} />
            </Routes>
        </Router>
        <footer>
            <div style={{width: '50%', marginLeft: '25%', marginBottom: '2.5%', marginTop: '2.5%'}}>
                <i className='bi-c-circle' style={{paddingRight: '1%'}}></i>
                34 Studios
            </div>
        </footer>
    </div>
  );
}

export default App;
