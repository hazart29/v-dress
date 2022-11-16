import path from 'path'
import { promises as fs } from 'fs'

export default async function(req, res){
    const jsonDir = path.join(process.cwd(), 'data')
    const dataJson = '/data.json'
    const fileDipakai = await fs.readFile(jsonDir+dataJson, 'utf-8') 

    if (req.method === 'POST'){
        let dataFile = JSON.parse(fileDipakai)
        dataFile.dipakai.baju = req.body.first
        fs.writeFile(jsonDir+dataJson, JSON.stringify(dataFile))
        return res.status(200).json({})
    }
    res.status(200).json(fileDipakai)
}