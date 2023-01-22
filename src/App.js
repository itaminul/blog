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
import WhatIsMongodb from './components/mongodb/WhatIsMongodb';
import Advantages from './components/mongodb/Advantages';
import MongodbDocuments from './components/mongodb/MongodbDocuments';
import MongodbCollection from './components/mongodb/MongodbCollection';
import MongodbShell from './components/mongodb/MongodbShell';
import MongodbFeatures from './components/mongodb/MongodbFeatures';

//read more prisma
import ReadMoreHomePrisma from './components/readMore/prismaLayouts/ReadMoreHomePrisma';
import WhatIsPrisma from './components/prisma/WhatIsPrisma';
import PrismaCli from './components/prisma/PrismaCli';
import PrismaClient from './components/prisma/PrismaClient';
import PrismaMigrations from './components/prisma/PrismaMigrations';

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
    whatisjavascript: 'Javascript  -   Read More - javascript ',
    dataTypes: 'Javascript  -   Read More - dataTypes ',
    arrowFunction: 'Javascript  -   Read More - arrowFunction ',
    async: 'Javascript  -   Read More -  async ',
    await: 'Javascript  -   Read More -  await ',
    blockScope: 'Javascript  -   Read More - block scope ',
    eventLoop: 'Javascript  -   Read More -  event loop ',
    defaultParameter: 'Javascript  -   Read More - default parameter ',
    callStack: 'Javascript  -   Read More - call stack ',
    eventQueue: 'Javascript  -   Read More - event queue ',
    lexicalScope: 'Javascript  -   Read More - laxical scope ',
    protoType: 'Javascript  -   Read More - prototype ',
    promise: 'Javascript  -   Read More - promise ',
    //react 
    react: 'React  ->   Read More ',
    hooks: 'React ->  Hooks',
    country: 'Austria',
    blog: 'Blog -> Blog Details',
    hoisting: 'React - Read More - Hoisting',
    dom: 'React - Read More - Dom',
    fragments: 'React - Read More - Fragments',
    state: 'React - Read More - state',
    usecallback: 'React - Read More - useCallback',
    usestate: 'React - Read More - useState',
    usememo: 'React - Read More - useMemo',
    useref: 'React - Read More - useRef',
    //node js
    blocking: 'Node - Read More - Blocking',
    noneblocking: 'Node - Read More - Nonblocking',
    //express js
    httpmethod: 'Express - Read More - Http Methods',
    usesexpress: 'Express - Read More - Uses Express',
    routehandler: 'Express - Read More - Route Handler',
    cors: 'Express - Read More - Cors',
    errorhandler: 'Express - Read More - Error Handler',
    middleware: 'Express - Read More - Middleware',
    //php
    readmorephp: 'PHP - Read More',
    whatisphp: 'PHP - Read More - What is PHP',
    typeofarray: 'PHP - Read More - Types of array',
    vardump: 'PHP - Read More - Var Dump',
    printr: 'PHP - Read More - Print_r',
    pear: 'PHP - Read More - Pear',
    getpost: 'PHP - Read More - Get & Post',
    //mysql
    mysql: 'Mysql - Read More',
    whatismysql: 'Mysql - Read More - What is mysql',
    addcolumng: 'Mysql - Read More - Add Column',
    foreignkey: 'Mysql - Read More - Foreign Key',
    jointable: 'Mysql - Read More - Join Table',
    charvarchar: 'Mysql - Read More - Char and Varchar',
    distinct: 'Mysql - Read More - Distinct',

    //mongodb
    mongodb: 'Mongodb - Read More',
    whatismongodb: 'Mongodb - Read More - What is mongodb',
    advantages: 'Mongodb - Read More - Advantages',
    documents: 'Mongodb - Read More - Documents',
    collection: 'Mongodb - Read More - Collection',
    mongodbshell: 'Mongodb - Read More - Mongodb Shell',
    features: 'Mongodb - Read More - Features',
    //prisma
    prisma: 'Prisma - Read More',
    whatisprisma: 'Prisma - Read More - What is prisma',
    prismacli: 'Prisma - Read More - Prisma CLI',
    prismaclient: 'Prisma - Read More - Prisma Client',
    migration: 'Prisma - Read More - Migration',   

  };

  const LeftSideMenuTitle = {

    reactTitle: 'React',
    javascriptTitle: 'Javascript',
    nodeTitle: 'Nodejs',
    phpTitle: 'PHP',
    prismaTitle: 'Prisma',
    mongodbTitle: 'Mongodb',
    mysqlTitle: 'Mysql',
    expressTitle: 'Express',
  }


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
        <Route path='/read-more' element={<ReadMore  leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />}  />
        <Route path='/hooks' element={ <Hooks breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/blogs' element={ <BlogIndex breadcrumbs={BreadCrumbsItems} /> }  />
        {/* javascript */}
        <Route path='/what-is-javascript' element={ <WhatIsJavascript leftbartitle={LeftSideMenuTitle}  breadcrumbs={BreadCrumbsItems} /> }/>
        <Route path='/javascript-script-data-types'   element={ <JavascriptScriptDataTypes leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />


        <Route path='/javascript-arrow-function' 
          element={ <ArrowFunction  leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />

        <Route path='/javascript-async' element={ <Async leftbartitle={LeftSideMenuTitle}   breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-await' element={ <Await  leftbartitle={LeftSideMenuTitle}  breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-block-scope'  element={ <BlockScope  leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/javascript-call-stack'  element={ <CallStack breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/javascript-default-parameter'   element={ <DefaultParameter breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/javascript-event-loop'   element={ <EventLoop breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/javascript-event-queue'  element={ <EventQueue breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/javascript-lexical-scope'  element={ <LexicalScope breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/javascript-proto-type' element={ <Prototypes breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/javascript-promise'   element={ <Promises breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />

        {/* react read more*/}
        <Route path='/read-more-react' element={ <ReadMoreHomeReact leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} /> } />

        <Route path='/react-dom'  element={ <Dom breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/react-fragment'  element={ <Fragments breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/react-state' element={ <State breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/react-use-callback'  element={ <UseCallBack breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/react-use-state' element={ <UseState breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/react-use-memo' element={ <UseMemo breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/react-use-ref' element={ <UseRef breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}   />} />

        
        {/*node js*/}
        <Route path='/read-more-node'  element={ <ReadMoreHomeNode leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems}  />} />
        <Route path='/node-js-blocking' element={ <Blocking breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/node-js-none-blocking'    element={ <Nonblocking breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />

        {/*express js*/}

        <Route path='/read-more-express'  element={ <ReadMoreHomeExpress leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/express-js-http-methods'   element={ <HttpMethods breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/express-js-uses' element={ <UsesOfExpress breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/express-js-route-handler'  element={ <RouteHandler breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/express-js-cors' element={ <Cors breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/express-js-error-handler'  element={ <ErrorHandler breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/express-js-middleware'   element={ <Middleware breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />


      {/*php*/}
        <Route path='/read-more-php'   element={<ReadMoreHomePhp leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/php-what-is-php' element={<WhatIsPhp breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/php-types-of-array'   element={<TypesOfArray breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/php-var-dump' element={<VarDump breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/php-print-r' element={<PrintR breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/php-pear'   element={<Pear breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/php-get-post'  element={<GetAndPost breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  />} />
        

      {/*mysql*/}
        <Route path='/read-more-mysql'  element={ <ReadMoreHomeMysql  leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-what-is-mysql'  element={ <WhatIsMysql  breadcrumbs={BreadCrumbsItems}
          leftbartitle={LeftSideMenuTitle} 
        /> } />
          <Route path='/mysql-add-column'  element={ <AddColumn 
          leftbartitle={LeftSideMenuTitle} 
           breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-foreign-key' element={ <ForeignKey   leftbartitle={LeftSideMenuTitle}  breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-join-tables' element={ <JoinTables  leftbartitle={LeftSideMenuTitle}   breadcrumbs={BreadCrumbsItems}
        /> } />
          <Route path='/mysql-char-varchar' element={ <CharAndVarchar  breadcrumbs={BreadCrumbsItems}
          leftbartitle={LeftSideMenuTitle}  
        /> } />
          <Route path='/mysql-distinct'  element={ <Distinct  breadcrumbs={BreadCrumbsItems}
          leftbartitle={LeftSideMenuTitle}  
        /> } />


        {/* mongodb */}
        <Route path='/read-more-mongodb' element={ <ReadMoreHomeMongodb   breadcrumbs={BreadCrumbsItems}
        leftbartitle={LeftSideMenuTitle}
        /> } />
        <Route path='/mongodb-what-is-mongodb' element={ <WhatIsMongodb  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}/>   } />
        <Route path='/mongodb-advantages'element={ <Advantages   leftbartitle={LeftSideMenuTitle}  
        breadcrumbs={BreadCrumbsItems}/> } />
        <Route path='/mongodb-documents'  element={ <MongodbDocuments  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  /> } />
        <Route path='/mongodb-collection' element={ <MongodbCollection  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  /> } />
        <Route path='/mongodb-shell' element={ <MongodbShell  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  /> } />
        <Route path='/mongodb-features' element={ <MongodbFeatures  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}  /> } />

      {/*prisma*/}
        <Route path='/read-more-prisma' element={ <ReadMoreHomePrisma  leftbartitle={LeftSideMenuTitle} breadcrumbs={BreadCrumbsItems} />} />
        <Route path='/prisma-what-is-prisma'   element={ <WhatIsPrisma  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle} />} />
        <Route path='/prisma-cli' element={ <PrismaCli  breadcrumbs={BreadCrumbsItems}  leftbartitle={LeftSideMenuTitle}  />} />
        <Route path='/prisma-client' element={ <PrismaClient  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
        <Route path='/prisma-migrations' element={ <PrismaMigrations  breadcrumbs={BreadCrumbsItems} leftbartitle={LeftSideMenuTitle}   />} />
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
