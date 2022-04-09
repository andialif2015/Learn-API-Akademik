const { dosen } = require('../models');

createDosen = async (req, res) => {
    try{
        let { nama, email, alamat } = req.body;
        let newDosen = await dosen.create({
            nama,
            email,
            alamat
        });
        res.status(201).json({
            status: 'success',
            message: 'add new dosen',
            data: newDosen
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getAllDosen = async (req,res) => {
    try{
        let allDosen = await dosen.findAll();
        res.status(200).json({
            status: 'success',
            message: 'get All dosen',
            data: allDosen
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getDosen = async (req,res) => {
    try{
        let id_dosen = req.params.id;
        let data = await dosen.findOne({
            where:{
                id:id_dosen
            },
            include: ["matakuliah"]
        });
        res.status(200).json({
            status: 'success',
            message: 'get dosen',
            data: data
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

updateDosen = async (req,res) => {
    try{
        let id_dosen = req.params.id;
        let { nama, email, alamat } = req.body;
        let updateDosen = await dosen.update({
            nama,
            email,
            alamat
        },{
            where:{
                id:id_dosen
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'updated dosen',
            data: updateDosen
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}
deleteDosen = async (req,res) => {
    try{
        let id_dosen = req.params.id;
        let deleteDosen = await dosen.destroy({
            where:{
                id:id_dosen
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'deleted dosen',
            data: deleteDosen
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
    createDosen,
    getAllDosen,
    getDosen,
    updateDosen,
    deleteDosen
}