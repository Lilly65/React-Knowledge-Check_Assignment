import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Users from './components/Users';
import UserTodos from './components/UserTodos';
import UserForm from './components/UserForm';
import About from './components/About';
import Contact from './components/Contact';
import ImgButton from './components/imgbutton';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user-todos/:userId" element={<UserTodos />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imgbutton" element={<ImgButton />} />
      </Routes>
    </>
  );
}

export default App;