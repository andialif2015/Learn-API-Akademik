const { matakuliah } = require('../models');

createMatkul = async (req, res) => {
    try{
        let { nama, sks, id_dosen } = req.body;
        let newMatkul = await matakuliah.create({
            nama,
            sks, 
            id_dosen
        });
        res.status(201).json({
            status: 'success',
            message: 'add new matakuliah',
            data: newMatkul
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getAllMatkul = async (req,res) => {
    try{
        let allMatkul = await matakuliah.findAll();
        res.status(200).json({
            status: 'success',
            message: 'get All matakuliah',
            data: allMatkul
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getMatkul = async (req,res) => {
    try{
        let id_matkul = req.params.id;
        let matkul = await matakuliah.findOne({
            where:{
                id:id_matkul
            },
            include:["dosen","krs"]
        });
        res.status(200).json({
            status: 'success',
            message: 'get matakuliah',
            data: matkul
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

updateMatkul = async (req,res) => {
    try{
        let id_matkul = req.params.id;
        let { nama, sks, id_dosen } = req.body;
        let updated = await matakuliah.update({
            nama,
            sks,
            id_dosen
        },{
            where:{
                id:id_matkul
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'updated matakuliah',
            data: updated
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}
deleteMatkul = async (req,res) => {
    try{
        let id_matkul = req.params.id;
        let deleted = await matakuliah.destroy({
            where:{
                id:id_matkul
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'deleted mahasiswa',
            data: deleted
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}


module.exports = {
    createMatkul,
    getAllMatkul,
    getMatkul,
    updateMatkul,
    deleteMatkul
}