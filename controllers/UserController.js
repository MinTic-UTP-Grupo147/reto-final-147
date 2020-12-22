const config = require('../secret/config.js');
const db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
// importar el metodo endcode del token
const tokenServices = require('../services/token');


exports.login = (req,res) =>{
    db.Usuario.findOne({
        where:{
            email: req.body.email
        }
    }).then(async user =>{ 
        if(!user){
            return res.status(404).send('User Not Found.');
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid){
            return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!"});
        }
        const token = await tokenServices.encode(user);
        res.status(200).send({auth: true, tokenReturn: token});    
    }).catch(err =>{
        res.status(500).send('Error ->' + err);
    });

};
// exportar el metodo list
exports.list = async(req,res)=>{
    const user = await db.Usuario.findAll();
    res.status(200).json(user);
};

// exportar el metodo register
// exports.register = async(req,res) =>{
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//     const user = await db.Usuario.create(req.body);
//     res.status(200).json(user);
// };

// exportar el metodo add
exports.add = async(req,res,next)=>{
    try {
     const registro = await db.Usuario.create(req.body);
     res.status(200).json(registro);
    } catch (error) {
        res.status(500).send({
            message:'Error'
        })
        next(error);
    }
}
// exportar el metodo update
exports.update = async(req,res) => {
    try {
        const user = await db.Usuario.findOne({where: {email: req.body.email}});
        if (user){
            const user = await db.Usuario.update({
                nombre: req.body.nombre,
                email:req.body.email,
                password:req.body.password,
                rol:req.body.rol,
                estado:req.body.estado,

                               
            },{
                where:{
                    email: req.body.email
                }
            });
            res.status(200).json(user);
        }else{
            res.status(404).send({
                message: 'User not found.'
            })
        }
    } catch (error) {
        res.status(500).send({
            message:'Error.'
        });
        noExtendLeft(error);
    }
}; 

// crear y exportar metodo activate
exports.activate = async(req,res,next)=>{
    try {
        const registro = await db.Usuario.update({estado:1},{
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
        const registro = await db.Usuario.update({estado: 0},{
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