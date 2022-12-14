import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Home from './components/home/Home';
import About from './components/pages/AboutUs';
import BatchIndex from './components/pages/setup/batch/BatchIndex';
import Dashbord from './components/layouts/Dashbord';
import Global from './styles/GlobalStyles';
import Profile from './components/portfolio/PortfolioHome'
import BlogIndex from './components/blog/BlogIndex';
import ReactDetails from './components/details/ReactDetails';
import Hooks from './components/details/reactPost/Hooks';
function App() {
  const theme = {
    colors: {
      header: 'black',
      body: 'black'
    }
  }
  const BreadCrumbsItems = {
    react: 'React -> React Details',
    hooks: 'React -> React Hooks',
    country: 'Austria'
  };


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Global />
      <Routes>
        <Route path='/' element={<Home theme={theme} />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/batch' element={<BatchIndex />} />
        <Route path='/dashbord' element={<Dashbord />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/react-details' element={<ReactDetails breadcrumbs={BreadCrumbsItems}  />} />
        <Route path='/hooks' element={ <Hooks breadcrumbs={BreadCrumbsItems} />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}


//https://codesandbox.io/s/marcus-9s7g8?from-embed=&file=/src/styles.css

export default App;
