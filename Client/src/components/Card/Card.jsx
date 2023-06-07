import styles from './Card.module.css';
import {Link} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions.js';
import {connect} from 'react-redux';
import {useState} from 'react';

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  }
  const handleClick = () => {
    props.onClose(props.id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={handleClick}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <Link className={styles.link} to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h4>{props.status}</h4>
        <h4>{props.species}</h4>
        <h4>{props.gender}</h4>
        <h4>{props.origin}</h4>
      </div>
      <img src={props.image} alt="Imagen" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
