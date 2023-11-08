import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewPage from './pages/AddNewPage';
import UpdatePage from './pages/UpdatePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlayerPage from './pages/PlayerPage';

export default function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/watch/:id" element={<PlayerPage />} />
            <Route path="/add-new-video" element={<AddNewPage />} />
            <Route path="/update-video/:id" element={<UpdatePage />} />
         </Routes>
         <Footer />
      </>
   );
}
