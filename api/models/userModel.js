const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
  'users',
  {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  { timestamps: false }
)

module.exports = User
