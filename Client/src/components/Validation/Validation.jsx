export function validation(props) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {};

  if (!props.email) {
    errors.email = 'El email no debe estar vacio';
  } else if (!regex.test(props.email)) {
    errors.email = 'Tiene que ser un email valido';
  } else if (props.email.length > 35) {
    errors.email = 'El email debe tener menos de 35 caracteres';
  }
  if (!props.password) {
    errors.password = 'El password no debe estar vacio';
  } else if (!/\d/.test(props.password)) {
    errors.password = 'El password debe tener al menos un numero';
  } else if (props.password.length > 10 || props.password.length < 6) {
    errors.password = 'el password debe tener menos de 10 caracteres';
  }

  return errors;
}
