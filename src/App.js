import Header from './components/Header/Header';
import './App.css';
import MediaCard from './components/Card/MediaCard';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Input from './components/Input/Input';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Header />
          <Routes>
          <Route path='/' element={<><Input /></>} />
            <Route path='/Products' element={<MediaCard />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

