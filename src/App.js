import React, {useState} from 'react';
import Navlist from './components/navlist/Navlist';
import About from './components/About/about';
import Why from './components/Why/why';
import Contact from './components/Contact/contact';
import Main from './components/Main/main';


function App() {
  const [ currentPage, handlePageChange] = useState('Main')

  const renderPage = () => {
    switch(currentPage) {
      case 'Main':
        return <Main/>
     case 'Get in Touch':
        return <Contact/>;
      case 'Why':
        return <Why/>;
      case 'About' :
        return <About/>;
      default:
        return <Main/>
    }
  }
  return (
    <div className="body">
      <header className="header">
      
      </header>
      <div className="navbar">
      <Navlist currentPage={currentPage} handlePageChange={handlePageChange}></Navlist>
     </div>
      <div class ="feather">
        {renderPage()}
         <br></br>
         <br></br>
         <br></br>
         
      </div>
     
    </div>
  );
}

export default App;
