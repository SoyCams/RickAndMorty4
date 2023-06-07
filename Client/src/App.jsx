/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
import {useEffect, useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import {Detail} from './components/Detail/Detail';
import {Form} from './components/Form/Form';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const verNav = !['/'].includes(location.pathname);

  const [access, setAccess] = useState(false);

  const EMAIL = 'correox@gmail.com';
  const Password = '123456';

  const login = (userData) => {
    if (userData.password === Password && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Email o Password incorrectos');
    }
  };

  const [characters, setCharacters] = useState([]);

  const filtro = (id) => {
    const newCharacters = characters.filter((character) => id !== character.id);
    return newCharacters;
  };

  const onSearch = (id) => {
    axios(`http://localhost:3004/rickandmorty/character/${id}`).then(
      ({data}) => {
        if (data.name) {
          const filtrado = filtro(id);
          const verificar = filtrado.some((character) => character.id == id);
          if (verificar) {
            window.alert('id ya existe');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  };
  const onClose = (id) => {
    setCharacters(filtro(id));
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className="App">
      {verNav && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
