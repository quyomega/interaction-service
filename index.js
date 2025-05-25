const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { sequelize } = require('./config/db');
const likeRoutes = require('./routes/likes');
const commentRoutes = require('./routes/comments');
const shareRoutes = require('./routes/shares');

app.use(bodyParser.json());

app.use('/likes', likeRoutes);
app.use('/comments', commentRoutes);
app.use('/shares', shareRoutes);

app.get('/', (req, res) => {
  res.send('Interaction Service is running !');
});

const PORT = 3001;
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await sequelize.sync({ alter: true });
});
