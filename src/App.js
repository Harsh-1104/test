import './App.css';
import Home from './Home';
import Cart from './Cart';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<>Nomatch</>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
