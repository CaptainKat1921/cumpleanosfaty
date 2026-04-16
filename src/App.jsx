import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftPage from './pages/giftPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/gift' element={<GiftPage />} />
    </Routes>
  )
}

export default App
