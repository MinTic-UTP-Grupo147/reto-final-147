var jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../secret/config');

const checkToken = async(token) =>{
    var localId = null;
    try {
        const id = await jwt.decode(token); /// provar si falla con token .decode(token);
        localId = id;
    } catch (error) {
        
    };
    const user = await models.Usuario.findOne({where:{
        id: localId,
        estado: 1,
    }});
    if(user){
        const token = encode(user);
        return{
            token,
            rol: user.rol
        };
    }else{
        return false;
    } 
};


module.exports = {

    //generar el token
    encode: async(user) => {
        const token = jwt.sign({
            id: user.id, 
            nombre: user.nombre, 
            email: user.email,
            rol: user.rol,
            status: user.estado
        },config.secret,{
                expiresIn: 86400
            });
            return token;
    },
    //permite decodificar el token 
    decode: async(token) => {
        try {
            const {id} = await jwt.verify(token, config.secret);
            const user = await models.Usuario.findOne({where:{
                id: id,
                estado: 1
            }});
            if(user){
                return user;
            }else{
                return false;
            }
        } catch (error) {
            const newToken = await checkToken(token);
            return newToken;
        }

    }
}