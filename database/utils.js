const fs = require('fs');
const path = require('path');


//create a utility function that save the data to the filesystem..



exports.saveToDB = (DB) => {
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(DB, null, 2), { encoding: 'utf-8' })
}