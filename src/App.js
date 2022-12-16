import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/AboutUs';
import BatchIndex from './components/pages/setup/batch/BatchIndex';
import Dashbord from './components/layouts/Dashbord';
import Global from './styles/global';
import Profile from './components/portfolio/PortfolioHome'
function App() {
  return (
    <div className="App">
      <Global />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/batch' element={<BatchIndex />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}


//https://codesandbox.io/s/marcus-9s7g8?from-embed=&file=/src/styles.css

export default App;
