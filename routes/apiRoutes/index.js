const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    //fs.readFile
    //JSON.parse()
    //array.push(file)
    //fs.writeFile()
        //json.stringify
    res.json(notes);
});

module.exports  = router;
