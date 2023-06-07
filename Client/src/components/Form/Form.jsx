import React, {useState} from 'react';
import FormStyle from './Form.module.css';
import {validation} from '../Validation/Validation';

export const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrayErrors = Object.values(errors);
    if (arrayErrors.length === 0) {
      login(userData);
      setUserData({
        email: '',
        password: '',
      });
      setErrors({});
    } else {
      window.alert('Debe llenar todos los campos');
    }
  };

  return (
    <div className={FormStyle.centrar}>
      <form onSubmit={handleSubmit} className={FormStyle.container}>
        <img
          className={FormStyle.imagen}
          alt="login"
          src="https://res.cloudinary.com/djyx9jath/image/upload/v1684960583/rickmorty/icegif-519_m3ktkk.gif"
        />
        <label>Email</label>
        <input
          name="email"
          value={userData.email}
          type="text"
          className={`${FormStyle.input} ${errors.email && FormStyle.warning} `}
          onChange={handleChange}
        />
        <h3 className={FormStyle.danger}>{errors.email}</h3>
        <label>Password</label>
        <input
          name="password"
          value={userData.password}
          type="password"
          className={`${FormStyle.input} ${
            errors.password && FormStyle.warning
          } `}
          onChange={handleChange}
        />
        <h3 className={FormStyle.danger}>{errors.password}</h3>
        <button className={FormStyle.boton}>Submit</button>
      </form>
    </div>
  );
};
