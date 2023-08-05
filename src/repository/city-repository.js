const {City} = require(`../models/index.js`);

class cityRepository {
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw new Error('Error creating city: ' + error.message);
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
        } catch (error) {
            throw new Error('Error deleting city: ' + error.message);
        }
    }
}

module.exports = cityRepository;