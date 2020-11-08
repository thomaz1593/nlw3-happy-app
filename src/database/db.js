const Database = require('sqlite-async');

//  Function execute to create tables on database 
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

//  Create or open file database.sqlite and then execute function
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)