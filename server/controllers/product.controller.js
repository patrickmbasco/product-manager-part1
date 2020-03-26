const {Product} = require("../models/product.model")

module.exports.getAllProducts = (req,res) =>{
    Product.find({})
        .then(allProds => res.json(allProds))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProd => res.json(newProd))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneProduct = (req, res) =>{
    const {id} = req.params;
    Product.findOne({_id:id})
        .then(oneProd => res.json(oneProd))
        .catch(err => res.json(err))
}