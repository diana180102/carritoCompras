import './App.css'
import { ShoppingCart } from './components/ShoppingCart.jsx';
import { Thanks } from './components/Thanks.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ShoppingCart/>} />
          <Route path='/thanks' element={<Thanks/>} />
      </Routes>
    </Router>
  )
}

export default App
