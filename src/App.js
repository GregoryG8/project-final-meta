import './App.css';
import BookingPage from './views/BookingPage/BookingPage';
import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/booking' element={<BookingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
