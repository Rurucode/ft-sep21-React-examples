import './App.css';
import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
