const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const slugify = require('slugify');

const Block = sequelize.define('Block', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    unique: true
  },
  summaryDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fullDescription: {
    type: DataTypes.TEXT
  },
  iconPath: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('Pending', 'In Development', 'Published'),
    defaultValue: 'Pending'
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  hooks: {
    beforeValidate: (block) => {
      if (block.title) {
        block.slug = slugify(block.title, { lower: true });
      }
    }
  }
});

module.exports = Block;