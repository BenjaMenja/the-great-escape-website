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
import DeveloperBlog from "./pages/DeveloperBlog";

function App() {

  return (
    <div className="App">
      <header>
          <TitleImage padding={'2rem'}/>
          <MyNavbar />
      </header>
        <Router>
            <Routes>
                <Route path={'/the-great-escape-website'} element={<Home />} />
                <Route path={'/the-great-escape-website/people'} element={<People />} />
                <Route path={'/the-great-escape-website/design'} element={<Design />} />
                    <Route path={'/the-great-escape-website/design/environment'} element={<Environment />} />
                    <Route path={'/the-great-escape-website/design/characters'} element={<Characters />} />
                    <Route path={'/the-great-escape-website/design/objects'} element={<Objects />} />
                <Route path={'/the-great-escape-website/dev-log'} element={<DeveloperBlog />} />
                <Route path={'/the-great-escape-website/download'} element={<Download />} />
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
