const { Sequelize } = require('sequelize');
const config = {
  database: 'task_management',
  username: 'postgres',
  password: 'Rafah_123',
  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

module.exports = sequelize;
