import Style from './About.module.css';
const About = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/djyx9jath/image/upload/v1684888285/rickmorty/8c8bb26c-4b8e-42be-b3c5-f4f53d801519_qqeoo0.jpg"
        alt="Carlos Maestre"
        className={Style.imagen}
      />
      <h1 className={Style.textoprimario}>Carlos Maestre</h1>
    </div>
  );
};

export default About;
