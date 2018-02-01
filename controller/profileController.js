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

     /* Finds all entities.
     * @return all entities
     */
    getProfilesList(res) {
        this.profileRepository.getProfilesList()
            .then(this.findSuccess(res))
            .catch(this.findError(res));
    };

    getProfilesByActivity(req, res) {
        let activity = req.params.activity;
        this.profileRepository.getProfilesByActivity(activity)
            .then(this.findSuccess(res))
            .catch(this.findError(res));
    };

    downloadProfilesByActivity(req, res) {
        let activity = req.params.activity;
        this.profileRepository.getProfilesByActivity(activity)
            .then(this.createDownloadFile(res, activity))
            .catch(this.findError(res));
    }

    createDownloadFile(res, activity) {
        return (result) => {
            let fields = ['firstname', 'lastname', 'sector', 'email', 'phone', 'createdAt'];
            let fileName = activity + '_profiles_' + Math.floor((Math.random() * 10000) + 1) + '.csv';
            let filePath = __dirname + '/../view/public/download/' + fileName;
            let csv = json2csv({data: result, fields: fields});
            console.log(result);
            fs.writeFile('view/public/download/' + fileName, csv, function (err) {
                if (err) {
                    console.log(err);
                }
                res.status(200);
                res.download(filePath, fileName, function(err){
                    fs.unlink('view/public/download/' + fileName, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    });
                });
            });

        };
    }
}

module.exports = ProfileController;
