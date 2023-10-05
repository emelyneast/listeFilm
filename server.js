// Dans votre fichier serveur Node.js
const express = require('express');
const app = express();

// Définissez vos routes API ici
app.get('/api/data', (req, res) => {
  // Renvoyez des données JSON en réponse
  res.json({ message: 'Ceci est une réponse depuis le serveur Node.js' });
});

//http://localhost:3000/api/data
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
