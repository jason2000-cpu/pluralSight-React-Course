// import speakerData from "../../../src/SpeakerData";

import path from 'path';
import fs from 'fs';

const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function Speakers(req, res){
    // res.status(200).send(JSON.stringify(speakerData, null, 2))
    
    const jsonFile = path.resolve('./', 'db.json');
    try {
        const readFileData = await readFile(jsonFile);
        await delay(1000);
        const speakers = JSON.parse(readFileData).speakers;
        console.log(speakers)
        if(!speakers) {
            res.status(404).send('Error: Request failed with status code 404');
        } else {
            res.setHeader('Content-Type', "application/json");
            res.status(200).send(JSON.stringify(speakers, null, 2));
            console.log('Get /api/speakers status: 200');
        }
    } catch(err) {
        console.log("Error /api/speakers", err)
    }
}

export default Speakers;