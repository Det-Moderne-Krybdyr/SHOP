const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/contact/:a', async(req, res) => {
  // const email = req.body.email
  // const website = req.body.website
  const {email, website, message} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const contactData = {email: email, website: website, message: message}
      const newContact = new schemas.Contact(contactData)
      const saveContact = await newContact.save()
      if (saveContact) {
        res.send('Message sent. Thank you.')
      } else {
        res.send('Failed to send message.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.get('/products', async (req, res) => {
  try {
    const productsData = await schemas.Products.find({}).exec();
    if (productsData && productsData.length > 0) {
      res.json(productsData); // Sending the found productsData
    } else {
      res.status(404).json({ error: 'No products found' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router