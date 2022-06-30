const router = require('express').Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {

    try {
        const result = await Product.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(422).json({error: 'Invalid product'})
        
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const result = await Product.findOne({_id: id})
        res.status(200).json(result)
        
    } catch (error) {
        res.status(422).json({error: 'Invalid product'})
        
    }
})


router.post('/', async (req, res) => {
    const {name, price, active, profit} = req.body

    const product = {name, price, active, profit}

    try {
        const result = await Product.create(product)
        res.status(200).json(result)
    } catch (error) {
        res.status(422).json({message: 'invalid product'})
    }
})





module.exports = router