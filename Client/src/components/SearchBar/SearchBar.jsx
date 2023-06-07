import styles from './SearchBar.module.css';
/* eslint-disable react/prop-types */
import {useState} from 'react';

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  const handleClick = () => {
    props.onSearch(id);
    setId('');
  };

  const handleClickRandom = () => {
    const NumeroRandom = Math.floor(Math.random() * 826) + 1;
    props.onSearch(NumeroRandom);
  };

  return (
    <div>
      <input value={id} onChange={handleChange} type="search" />
      <button className={styles.boton} onClick={handleClick}>
        Agregar
      </button>
      <button className={styles.boton} onClick={handleClickRandom}>
        Random
      </button>
    </div>
  );
}
