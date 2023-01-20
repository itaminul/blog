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
import ReadMore from './components/readMore/ReadMore';
import WhatIsJavascript from './components/javascript/WhatIsJavascript';
import JavascriptScriptDataTypes from './components/javascript/JavascriptScriptDataTypes';
import ArrowFunction from './components/javascript/ArrowFunction';
import Async from './components/javascript/Async';
import Await from './components/javascript/Await';
import BlockScope from './components/javascript/BlockScope';
import CallStack from './components/javascript/CallStack';
import DefaultParameter from './components/javascript/DefaultParameter';
import EventLoop from './components/javascript/EventLoop';
import EventQueue from './components/javascript/EventQueue';
import LexicalScope from './components/javascript/LexicalScope';
import Prototypes from './components/javascript/Prototypes';
import Promises from './components/javascript/Promises';

//react more react 
import ReactHome from './components/react/ReactHome';

//read more node js
import ReadMoreHomeNode from './components/readMore/nodejsLayouts/ReadMoreHomeNode';

// read more express
import ReadMoreHomeExpress from './components/readMore/expressjsLayouts/ReadMoreHomeExpress';

//read more PHP
import ReadMoreHomePhp from './components/readMore/phpLayouts/ReadMoreHomePhp';

//read more mysql
import ReadMoreHomeMysql from './components/readMore/mysqlLayouts/ReadMoreHomeMysql';
//read more mongobd
import ReadMoreHomeMongodb from './components/readMore/mongodbLayouts/ReadMoreHomeMongodb';
//read more prisma
import ReadMoreHomePrisma from './components/readMore/prismaLayouts/ReadMoreHomePrisma';

function App() {
  const theme = {
    colors: {
      header: 'black',
      body: 'black'
    }
  }
  const BreadCrumbsItems = {
    //javascript
    javascript: 'Javascript  ->   Read More ',
    whatisjavascript: 'Javascript  -   Read More - What is javascript ',
    dataTypes: 'Javascript  -   Read More - What is dataTypes ',
    arrowFunction: 'Javascript  -   Read More - What is arrowFunction ',
    async: 'Javascript  -   Read More - What is async ',
    await: 'Javascript  -   Read More - What is await ',
    blockScope: 'Javascript  -   Read More - What is block scope ',
    eventLoop: 'Javascript  -   Read More - What is event loop ',
    defaultParameter: 'Javascript  -   Read More - What is default parameter ',
    callStack: 'Javascript  -   Read More - What is call stack ',
    eventQueue: 'Javascript  -   Read More - What is event queue ',
    lexicalScope: 'Javascript  -   Read More - What is laxical scope ',
    protoType: 'Javascript  -   Read More - What is prototype ',
    promise: 'Javascript  -   Read More - What is promise ',

    react: 'React  ->   Read More ',
    hooks: 'React -> React Hooks',
    country: 'Austria',
    blog: 'Blog -> Blog Details',
    hoisting: '',
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
        {/* <Route path='/read-more' element={<ReactDetails breadcrumbs={BreadCrumbsItems}  />} /> */}
        <Route path='/read-more' element={<ReadMore breadcrumbs={BreadCrumbsItems} />}  />
        <Route path='/hooks' element={ <Hooks breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/blogs' element={ <BlogIndex breadcrumbs={BreadCrumbsItems} /> }  />
        {/* javascript */}
        <Route path='/what-is-javascript' element={ <WhatIsJavascript breadcrumbs={BreadCrumbsItems} /> }/>
        <Route path='/javascript-script-data-types' element={ <JavascriptScriptDataTypes breadcrumbs={BreadCrumbsItems} />} />


        <Route path='/javascript-arrow-function' element={ <ArrowFunction breadcrumbs={BreadCrumbsItems} />} />

        <Route path='/javascript-async' element={ <Async breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-await' element={ <Await breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-block-scope' element={ <BlockScope breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-call-stack' element={ <CallStack breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-default-parameter' element={ <DefaultParameter breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-event-loop' element={ <EventLoop breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-event-queue' element={ <EventQueue breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-lexical-scope' element={ <LexicalScope breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-proto-type' element={ <Prototypes breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-promise' element={ <Promises breadcrumbs={BreadCrumbsItems} />} />

        {/* react read more*/}
        <Route path='/read-more-react' element={ <ReactHome breadcrumbs={BreadCrumbsItems} /> } />

        <Route path='/read-more-node' element={ <ReadMoreHomeNode breadcrumbs={BreadCrumbsItems}  />} />
        <Route path='/read-more-express' element={ <ReadMoreHomeExpress breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/read-more-php' element={<ReadMoreHomePhp breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/read-more-mysql'  element={ <ReadMoreHomeMysql  breadcrumbs={BreadCrumbsItems}
        /> } />
        <Route path='/read-more-mongodb' element={ <ReadMoreHomeMongodb  breadcrumbs={BreadCrumbsItems}/> } />
        <Route path='/read-more-prisma' element={ <ReadMoreHomePrisma  breadcrumbs={BreadCrumbsItems} />} />

      </Routes>
    </div>
    </ThemeProvider>
  );
}


//https://codesandbox.io/s/marcus-9s7g8?from-embed=&file=/src/styles.css

export default App;
