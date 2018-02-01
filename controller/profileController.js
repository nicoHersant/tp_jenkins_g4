// Load dependances
const ProfileRepository = require('../repository/profileRepository');
const fs = require('fs');

 // Profile Controller

class ProfileController {

    constructor() {
        this.profileRepository = new ProfileRepository();
    }
    findSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }
    findError(res) {
        return (error) => {
            console.log(error);
            res.status(error.status);
            res.json(error.message);
        }
    }
    getDeliveryList(res) {
        this.profileRepository.getDeliveryList()
            .then(this.findSuccess(res))
            .catch(this.findError(res));
    };
    getProfilesList(res) {
        this.profileRepository.getProfilesList()
            .then(this.findSuccess(res))
            .catch(this.findError(res));
    };

}

module.exports = ProfileController;
