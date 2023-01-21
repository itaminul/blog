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
import ReadMoreHomeReact from './components/readMore/reactLayouts/ReadMoreHomeReact';
import Dom from './components/react/Dom';
import Fragments from './components/react/Fragments';
import State from './components/react/State';
import UseCallBack from './components/react/UseCallBack';
import UseState from './components/react/UseState'
import UseMemo from './components/react/UseMemo';
import UseRef from './components/react/UseRef';

//read more node js
import ReadMoreHomeNode from './components/readMore/nodejsLayouts/ReadMoreHomeNode';
import Blocking from './components/nodejs/Blocking';
import Nonblocking from './components/nodejs/NoneBlocking';

// read more express
import ReadMoreHomeExpress from './components/readMore/expressjsLayouts/ReadMoreHomeExpress';

import HttpMethods from './components/expressjs/HttpMethods';
import UsesOfExpress from './components/expressjs/UsesOfExpress';
import RouteHandler from './components/expressjs/RouteHandler';
import Cors from './components/expressjs/Cors';
import ErrorHandler from './components/expressjs/ErrorHandler';
import Middleware from './components/expressjs/Middleware';

//read more PHP
import ReadMoreHomePhp from './components/readMore/phpLayouts/ReadMoreHomePhp';
import WhatIsPhp from './components/php/WhatIsPhp';
import TypesOfArray from './components/php/TypesOfArray';
import VarDump from './components/php/VarDump';
import PrintR from './components/php/PrintR';
import Pear from './components/php/Pear';
import GetAndPost from './components/php/GetAndPost';


//read more mysql
import ReadMoreHomeMysql from './components/readMore/mysqlLayouts/ReadMoreHomeMysql';
import WhatIsMysql from './components/mysql/WhatIsMysql';
import AddColumn from './components/mysql/AddColumn';
import ForeignKey from './components/mysql/ForeignKey';
import JoinTables from './components/mysql/JoinTables';
import CharAndVarchar from './components/mysql/CharAndVarchar';
import Distinct from './components/mysql/Distinct';

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
    //react 
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
        <Route path='/read-more-react' element={ <ReadMoreHomeReact breadcrumbs={BreadCrumbsItems} /> } />

        <Route path='/react-dom' element={ <Dom breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-fragment' element={ <Fragments breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-state' element={ <State breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-use-callback' element={ <UseCallBack breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-use-state' element={ <UseState breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-use-memo' element={ <UseMemo breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/react-use-ref' element={ <UseRef breadcrumbs={BreadCrumbsItems} />} />

        
        {/*node js*/}
        <Route path='/read-more-node' element={ <ReadMoreHomeNode breadcrumbs={BreadCrumbsItems}  />} />
        <Route path='/node-js-blocking' element={ <Blocking breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/node-js-none-blocking' element={ <Nonblocking breadcrumbs={BreadCrumbsItems} />} />

        {/*express js*/}

        <Route path='/read-more-express' element={ <ReadMoreHomeExpress breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-http-methods' element={ <HttpMethods breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-uses' element={ <UsesOfExpress breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-route-handler' element={ <RouteHandler breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-cors' element={ <Cors breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-error-handler' element={ <ErrorHandler breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-middleware' element={ <Middleware breadcrumbs={BreadCrumbsItems} />} />


      {/*php*/}
        <Route path='/read-more-php' element={<ReadMoreHomePhp breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-what-is-php' element={<WhatIsPhp breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-types-of-array' element={<TypesOfArray breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-var-dump' element={<VarDump breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-print-r' element={<PrintR breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-pear' element={<Pear breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-get-post' element={<GetAndPost breadcrumbs={BreadCrumbsItems} />} />
        

      {/*mysql*/}
        <Route path='/read-more-mysql'  element={ <ReadMoreHomeMysql  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-what-is-mysql'  element={ <WhatIsMysql  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-add-column'  element={ <AddColumn  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-foreign-key'  element={ <ForeignKey  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-join-tables'  element={ <JoinTables  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-char-varchar'  element={ <CharAndVarchar  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-distinct'  element={ <Distinct  breadcrumbs={BreadCrumbsItems}
        /> } />

        


        <Route path='/read-more-mongodb' element={ <ReadMoreHomeMongodb  breadcrumbs={BreadCrumbsItems}/> } />
        <Route path='/read-more-prisma' element={ <ReadMoreHomePrisma  breadcrumbs={BreadCrumbsItems} />} />

      </Routes>
    </div>
    </ThemeProvider>
  );
}

//RFL brb-cable   tar bigle 1 koil 1745- 1*23500
//2.5 2015
// 1 4030
//dis tar 3080
//wify 700
// 15066

// nikk - 6pin  5646 //1*13
// 1872
//3pin geng - 1833
//2pin 765
// gliger 525
//coling bel 254
// 10800


//2000
// 

//2room - 3000


//https://codesandbox.io/s/marcus-9s7g8?from-embed=&file=/src/styles.css

export default App;
