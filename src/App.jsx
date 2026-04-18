import './App.css'
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GiftPage from './pages/GiftPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/gift' element={<GiftPage />} />
      </Routes>
    </>
  )
}

export default App
