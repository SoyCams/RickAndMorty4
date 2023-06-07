import styles from './Detail.module.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3004/rickandmorty/character/${id}`).then(
      ({data}) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button>X</button>
      </div>
      <div className={styles.dataContainer}>
        <h2>{character.name}</h2>
        <h4>{character.status}</h4>
        <h4>{character.species}</h4>
        <h4>{character.gender}</h4>
        <h4>{character.origin?.name}</h4>
      </div>
      <img src={character.image} alt="Imagen" />
    </div>
  );
};
