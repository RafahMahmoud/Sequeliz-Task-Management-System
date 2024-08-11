// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Task = sequelize.define('Task', {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   description: {
//     type: DataTypes.STRING
//   },
//   completed: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   },
//   deletedAt: {
//     type: DataTypes.DATE
//   }
// }, {
//   paranoid: true
// });

// module.exports = Task;



const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
  paranoid: true,
});

module.exports = Task;
