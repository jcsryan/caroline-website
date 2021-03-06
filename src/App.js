import React, {useState} from 'react';
import Navlist from './components/navlist/Navlist';
import About from './components/About/about';
import Why from './components/Why/why';
import Contact from './components/Contact/contact';
import Main from './components/Main/main';
import Foot from './components/Foot/foot';

function App() {
  const [ currentPage, handlePageChange] = useState('Main')

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Main/>
     case 'Contact':
        return <Contact/>;
      case 'Why Telehealth':
        return <Why/>;
      case 'About Me' :
        return <About/>;
      default:
        return <Main/>
    }
  }
  return (
    <body className="body">
      <div className="wrapper">
      <header className="header">
      </header>
      <div className="navbar">
      <Navlist currentPage={currentPage} handlePageChange={handlePageChange}></Navlist>
     </div>
      <div class ="feather">
        {renderPage()}
       
         
      </div>
      <div className="push"></div>
      </div>
      <br></br>
      <br></br>
     <Foot></Foot>
    </body>
  );
}

export default App;
