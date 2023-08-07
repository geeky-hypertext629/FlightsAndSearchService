'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //Has access ro all the models in the database
      // define association here
      this.belongsTo(models.City, { //Since Airport belongs to a city and city has many airports so we use hasMany in city model and belongsTo in airport model
        foreignKey: 'cityId', //The key that associates the relationship between the two models
        onDelete: 'CASCADE' //If i delete a city in database all the airports corresponding to a city has to be deleted
      })
    }
  }
  Airport.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    address: DataTypes.STRING,
    cityId: {type: DataTypes.INTEGER,
    allowNull:false}
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};