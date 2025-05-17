import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import AddJob from './pages/AddJob';
import Navbarr from './components/Navbarr';
import ApplyForm from './pages/ApplyForm';

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addjob" element={<AddJob />} />
        <Route path="/apply/:jobId" element={<ApplyForm />} />
      </Routes>
    </>
  );
}

export default App;
