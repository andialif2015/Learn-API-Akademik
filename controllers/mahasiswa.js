const { mahasiswa } = require('../models');

createMhs = async (req, res) => {
    try{
        let { nama, email, alamat } = req.body;
        let newMhs = await mahasiswa.create({
            nama,
            email,
            alamat
        });
        res.status(201).json({
            status: 'success',
            message: 'add new mahasiswa',
            data: newMhs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getAllMhs = async (req,res) => {
    try{
        let allMhs = await mahasiswa.findAll();
        res.status(200).json({
            status: 'success',
            message: 'get All Mahasiswa',
            data: allMhs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

getMhs = async (req,res) => {
    try{
        let id_mhs = req.params.id;
        let mhs = await mahasiswa.findOne({
            where:{
                id:id_mhs
            },
            include: ['krs']
        });
        res.status(200).json({
            status: 'success',
            message: 'get Mahasiswa',
            data: mhs
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            status: 'error',
            errors: err
        });
    }
}

updateMhs = async (req,res) => {
    try{
        let id_mhs = req.params.id;
        let { nama, email, alamat } = req.body;
        let updated = await mahasiswa.update({
            nama,
            email,
            alamat
        },{
            where:{
                id:id_mhs
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'updated mahasiswa',
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
deleteMhs = async (req,res) => {
    try{
        let id_mhs = req.params.id;
        let deleteMhs = await mahasiswa.destroy({
            where:{
                id:id_mhs
            }
        });
        res.status(200).json({
            status: 'success',
            message: 'deleted mahasiswa',
            data: deleteMhs
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
    createMhs,
    getAllMhs,
    getMhs,
    updateMhs,
    deleteMhs
}