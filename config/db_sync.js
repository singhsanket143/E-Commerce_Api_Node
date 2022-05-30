const db = require('../models/index');
function syncDb(forceSync) {
    if(forceSync) {
        db.sequelize.sync({force: true});
    } else {
        db.sequelize.sync();
    }
}

async function syncTable(alter, force, model) {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });
    if(force) {
        await model.sync({force: true});
    } 
    else if(alter) {
        await model.sync({alter: true})
    }
    else {
        await model.sync();
    }
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });
}

module.exports = {syncDb, syncTable};