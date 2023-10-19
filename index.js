const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Omar Pimentel <br>
            C.I: V.- 28.050.922 <br>
            Programacion III Seccion "3"`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutado exitosamente en el Puerto: ${port}`);
});
