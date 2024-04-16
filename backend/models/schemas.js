const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    product_key: { type: String },
    main_category: { type: String },
    sub_category: { type: String },
    name: { type: String },
    producent: { type: String },
    model: { type: String },
    description: { type: String },
    specs: {
        Processor: { type: String },
        Graphics_card: { type: String }
    },
    price: { type: Number },
    stock: { type: Number },
    colors: { type: String },
    image: { type: String },
    document: { type: String },
});

const contactSchema = new Schema({
    email: {type:String, required:true},
    website: {type:String, required:true},
    message: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const Products = mongoose.model('Products', productSchema, 'products')
const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const mySchemas = {'Products':Products, 'Contact':Contact}

module.exports = mySchemas