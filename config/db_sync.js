const db = require('../models/index');
function syncDb(forceSync) {
    if(forceSync) {
        db.sequelize.sync({force: true});
    } else {
        db.sequelize.sync();
    }
}

module.exports = syncDb;