import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Home from './components/home/Home';
import About from './components/pages/AboutUs';
import BatchIndex from './components/pages/setup/batch/BatchIndex';
import Dashbord from './components/layouts/Dashbord';
import Global from './styles/GlobalStyles';
import Profile from './components/portfolio/PortfolioHome'
function App() {
  const theme = {
    colors: {
      header: 'black',
      body: 'black'
    }
  }
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}


//https://codesandbox.io/s/marcus-9s7g8?from-embed=&file=/src/styles.css

export default App;
