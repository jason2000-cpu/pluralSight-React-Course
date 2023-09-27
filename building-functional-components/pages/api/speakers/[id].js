import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => {setTimeout(resolve, ms)});

export default async function handler(req, res) {
    // res.status(200).send(JSON.stringify(data, null, 2))

    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;
    const jsonFile = path.resolve("./", "db.json");

    switch (method) {
        case "POST":
            await postMethod();
            break;
        case "PUT":
            await putMethod();
            break;
        case "DELETE":
            await deleteMethod();
            break;
        default:
            res.status(501).send(`Method ${method} Not Implemented`);
            console.log(`Method ${method} Not Implemented`);
    }


    async function  putMethod(){
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000).then(()=>{
                const speakers = JSON.parse(readFileData).speakers;
                if (!speakers) {
                    res.status(404).send("Error: Request Failed With Status 404")
                } else {
                    const newSpeakerArray = speakers.map((rec) => {
                        return  rec.id == id ? recordFromBody : rec
                    })
                    writeFile(jsonFile, JSON.stringify({ speakers: newSpeakerArray}, null, 2), () => {
                        if (err) {
                            res.status(500).send("Error While Editing File", err);
                        } else {
                            res.setHeader("Content-Type", "application/json");
                            res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                            console.log(`PUT /api/speakers/${id} status: OK 200`);
                        }
                    });
                    // res.setHeader("Content-Type", "application/json");
                    // res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                    // console.log(`PUT /api/speakers/${id}`);
                }
            })
        } catch (err) {
            res.status(500).send(`PUT /api/speakers/${id}`);
            console.log(`PUT /api/speakers/${id} status : 500`, err)
        }
    }

    async function  postMethod(){
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000).then(()=>{
                const speakers = JSON.parse(readFileData).speakers;
                if (!speakers) {
                    res.status(404).send("Error: Request Failed With Status 404")
                } else {
                    const newId = speakers.reduce((accumulator, currentValue) => {
                        const idCurrent = parseInt(currentValue.id);
                        return idCurrent > accumulator ? idCurrent : accumulator
                    }, 0) + 1;

                    const  newSpeakerRec = {...recordFromBody, id: newId.toString() };

                    const newSpeakerArray = [newSpeakerRec, ...speakers];
                    writeFile(jsonFile, JSON.stringify({ speakers: newSpeakerArray}, null, 2), () => {
                        if (err) {
                            res.status(500).send("Error while writing file", err)
                        } else {
                            res.setHeader("Content-Type", "application/json");
                            res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                            console.log(`POST /api/speakers/${id}`);
                        }
                    });
                    // res.setHeader("Content-Type", "application/json");
                    // res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                    // console.log(`POST /api/speakers/${id}`);
                }
            })
        } catch (err) {
            res.status(500).send(`POST /api/speakers/${id}`);
            console.log(`POST /api/speakers/${id} status : 500`, err)
        }
    }



    async function  deleteMethod(){
        try {
            const readFileData = await readFile(jsonFile);
            await delay(1000).then(()=>{
                const speakers = JSON.parse(readFileData).speakers;
                if (!speakers) {
                    res.status(404).send("Error: Request Failed With Status 404")
                } else {
                    const  newSpeakerRec = speakers.filter((rec) => {
                        return rec.id != id
                    })

                    // const newSpeakerArray = [newSpeakerRec, ...speakers];
                    const newSpeakerArray = newSpeakerRec;
                    writeFile(jsonFile, JSON.stringify({ speakers: newSpeakerArray}, null, 2), 'utf8', (err)=>{
                        if (err) {
                            res.status(500).send("Error While writing file", err)
                            console.log("Error writing file", err);
                        } else {
                            res.setHeader("Content-Type", "application/json");
                            res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                            console.log(`DELETE /api/speakers/${id}`);
                        }
                    });
                    // res.setHeader("Content-Type", "application/json");
                    // res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                    // console.log(`DELETE /api/speakers/${id}`);
                }
            })
        } catch (err) {
            res.status(500).send(`DELETE /api/speakers/${id}`);
            console.log(`DELETE /api/speakers/${id} status : 500`, err)
        }
    }
}
