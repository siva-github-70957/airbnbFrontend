import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './components/Layout';
import RegisterPage from './pages/RegisterPage.jsx';
import ProfilePage from './pages/ProfilePage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';


axios.defaults.baseURL = 'https://airbnbclonebackend-n253.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={< IndexPage />} />
          <Route path="/Login" element={< LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path='/account' element={<ProfilePage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlacesFormPage />} />
          <Route path='/account/places/:id' element={<PlacesFormPage />} />
          <Route path='/place/:id' element={<PlacePage />} />
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path='/account/bookings/:id' element={<BookingPage />} />
          {/* <Route path='/account/:subpage?' element={<ProfilePage />} />
          <Route path='/account/:subpage/:action' element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
