import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Product from './Compponent/product';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Cart from './Compponent/cart';
import Navbar from './Compponent/Navbar';
import Notfound from './Compponent/Notfound';
import Googlekeep from './Compponent/Googlekeep';
import Textadd from './Compponent/Textadd';
 import cofigureStore from './Compponent/Config'
import { Provider } from 'react-redux';
import store from './Compponent/Config';
import Post from './Compponent/Post';
 const Store = cofigureStore();
function App() {
  
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>~
      </header> */}
      {/* <Navbar /> */}
      <Provider store={Store} >
        <Post />
      </Provider >
      
      </div>
   </>
  );
}

export default App;
