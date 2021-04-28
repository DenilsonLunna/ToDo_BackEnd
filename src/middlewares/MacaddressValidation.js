const MacaddressValidation = (req, res, next) =>{
    if(!req.body.macaddress){
        return res.status(500).json({error: 'macaddress é obrigatório'})
    }else{
        next();
    }
}


module.exports = MacaddressValidation;