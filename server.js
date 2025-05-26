const app = require('./app');
const { sequelize } = require('./model');

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err.message);
});
