// importar los modelos
const db = require('../models');

// crear y exportar metodo list
exports.list = async(req,res,next)=>{
    try {
        const registro = await db.Articulo.findAll();
    res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message:'Error'
        })
        next(error);
    }
    
};
// crear y exportar metodo add
exports.add = async(req,res,next)=>{
   try {
    const registro = await db.Articulo.create(req.body);
    res.status(200).json(registro);
   } catch (error) {
       res.status(500).send({
           message:'Error'
       })
       next(error);
   }
  
};
// crear y exportar metodo update
exports.update = async(req,res,next)=>{
    try {
        const registro = await db.Articulo.update({nombre: req.body.nombre, descripcion: req.body.descripcion},{
            where:{
                id: req.body.id
            },
        });
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message:'Error'
        })
        next(error);
    }
    
};
// crear y exportar metodo activate
exports.activate = async(req,res,next)=>{
    try {
        const registro = await db.Articulo.update({estado:1},{
            where:{
                id: req.body.id
            },
        });
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message:'Error'
        })
        next(error);
    }
    
};
// crear y exportar metodo deactivate
exports.deactivate = async(req,res,next)=>{
    try {
        const registro = await db.Articulo.update({estado: 0},{
            where:{
                id: req.body.id
            },
        });
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message:'Error'
        })
        next(error);
    }
    
};