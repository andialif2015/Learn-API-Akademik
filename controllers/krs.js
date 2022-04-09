const { krs } = require('../models');

createKrs = async (req, res) => {
    try{
        let { id_mhs, id_matkul, semester } = req.body;
        let newKrs = await krs.create({
            id_mhs,
            id_matkul,
            semester
        });
        res.status(201).json({
            status: 'success',
            message: 'add new krs',
            data: newKrs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getAllKrs = async (req,res) => {
    try{
        let dataKrs = await krs.findAll();
        res.status(200).json({
            status: 'success',
            message: 'get All Krs',
            data: dataKrs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getKrs = async (req,res) => {
    try{
        let id_krs = req.params.id;
        let dataKrs = await krs.findOne({
            where:{
                id:id_krs
            },
            include:["mhs", "matkul"]
        });
        res.status(200).json({
            status: 'success',
            message: 'get krs',
            data: dataKrs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

updateKrs = async (req,res) => {
    try{
        let id_krs = req.params.id;
        let { id_mhs, id_matkul, semester } = req.body;
        let updated = await dosen.update({
            id_mhs,
            id_matkul,
            semester
        },{
            where:{
                id:id_krs
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'updated Krs',
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
deleteKrs = async (req,res) => {
    try{
        let id_krs = req.params.id;
        let deleteKrs = await krs.destroy({
            where:{
                id:id_krs
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'deleted krs',
            data: deleteKrs
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
    createKrs,
    getAllKrs,
    getKrs,
    updateKrs,
    deleteKrs
}