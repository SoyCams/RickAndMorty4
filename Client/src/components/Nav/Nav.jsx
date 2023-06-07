import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import {Link} from 'react-router-dom';
import Style from './Nav.module.css';

export default function Nav(props) {
  return (
    <div className={Style.container}>
      <Link className={Style.boton} to="/home">
        Home
      </Link>
      <SearchBar onSearch={props.onSearch} />
      <Link className={Style.boton} to="/about">
        about
      </Link>
      <Link className={Style.boton} to="/">
        Logout
      </Link>
    </div>
  );
}
