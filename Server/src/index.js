const http = require('http');
const url = require('url');
const data = require('./utils/data');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path.includes('/rickandmorty/character')) {
    const id = path.split('/').pop();

    // Verificar si el ID es un número
    if (!isNaN(id)) {
      const characterId = parseInt(id);

      // Buscar el personaje por ID en el archivo data.js
      const character = data.find((item) => item.id === characterId);

      if (character) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(character));
        console.log(character);
      } else {
        // Manejar el caso cuando no se encuentra el personaje
        console.log('personaje  no encontrado');
      }
    } else {
      // Manejar el caso cuando el ID no es un número válido
      console.log('id invalido');
    }
  }
});

const port = 3004;

server.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`);
});
