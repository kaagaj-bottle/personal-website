const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('articles', {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      title_image_url: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('articles')
  }
}

