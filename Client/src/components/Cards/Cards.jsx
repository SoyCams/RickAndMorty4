/* eslint-disable react/prop-types */
import Card from '../Card/Card.jsx';
import estilos from './Cards.module.css';

export default function Cards(props) {
  const personajes = props.characters;

  return (
    <div className={estilos.filas}>
      {personajes.map((character, index) => (
        <div className={estilos.columnas} key={index}>
          {
            <Card
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin?.name}
              image={character.image}
              onClose={props.onClose}
            />
          }
        </div>
      ))}
    </div>
  );
}
