const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});
