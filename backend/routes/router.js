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

router.get('/users', async (req, res) => {
  try {
    // Fetch user data from MongoDB
    const users = await schemas.Users.find({}).exec();
    if (users && users.length > 0) {
      const userNames = users.map(user => user.name);
      res.json(userNames);
    } else {
      res.status(404).json({ error: 'No users found' });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router