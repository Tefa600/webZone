import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../ContactUs/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';
import Recommendation from '../Recommendation/Recommendation';
import SignIn from "../Register/guest/SignIn";
import SignUp from "../Register/guest/SignUp";
import UserProfile from "../Profile/Guest/userProfile";
import OwnerProfile from "../Profile/Owner/ownerProfile";
import ResetPassword from "../Profile/resetPassword";
import Services from '../Services/Services';

//import './App.css';
//className="App"
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Services' element={<Services/>}></Route>
          <Route path='Recommendation' element={<Recommendation/>}></Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='Login' element={<SignIn />}></Route>
          <Route path='Register' element={<SignUp />}></Route>
          <Route path='UserProfile' element={<UserProfile />}></Route>
          <Route path='OwnerProfile' element={<OwnerProfile />}></Route>
          <Route path='ResetPassword' element={<ResetPassword />}></Route>
          <Route path='*' element={<Home />}></Route>

        </Routes>

    </>
  );
}

export default App;
