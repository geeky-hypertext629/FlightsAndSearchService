const {City} = require(`../models/index`);
const {Op} = require('sequelize')
class cityRepository {
    // async createCity({name}){
    //     try {
    //         const city = await City.create({name});
    //         return city;
    //     } catch (error) {
    //         throw new Error('Error creating city: ' + error.message);
    //     }
    // }

    // async deleteCity(cityId){
    //     try {
    //         await City.destroy({
    //             where : {
    //                 id : cityId
    //             }
    //         });
    //     } catch (error) {
    //         throw new Error('Error deleting city: ' + error.message);
    //     }
    // }


    constructor(){
    }

    async createCity({name}){
        try {
            const city = await City.create({
                name : name
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where : {
                    id : cityId
                },
                returning: true,
                plain: true
            })
            // const city = await City.findByPk(cityId);
            // city.name = data.name;
            // await city.save(); 
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            console.log("Hello");
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCities(filter){  //Filter can be empty also
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = cityRepository;