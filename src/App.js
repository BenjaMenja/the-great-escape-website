import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/HeaderContent/MyNavbar";
import TitleImage from "./components/HeaderContent/TitleImage";
import Home from "./pages/home";
import People from "./pages/people";
import Download from "./pages/download";
import Design from "./pages/design";

function App() {

  return (
    <div className="App">
      <header>
          <TitleImage padding={'5rem'}/>
          <MyNavbar />
      </header>
        <Router>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/people'} element={<People />} />
                <Route exact path={'/design'} element={<Design />} />
                <Route exact path={'/download'} element={<Download />} />
            </Routes>
        </Router>
        <footer>
            <div style={{width: '50%', marginLeft: '25%', marginBottom: '2.5%'}}>
                <i className='bi-c-circle' style={{paddingRight: '1%'}}></i>
                34 Studios
            </div>
        </footer>
    </div>
  );
}

export default App;
