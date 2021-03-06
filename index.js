const express = require('express');
const app = express();
const user_controller = require('./controllers/user_controller');
const mongoose = require ('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.get('/',function(req,res){
    res.status(200).json({message: 'Welcome to Art.b API '});
})
app.post('/user',user_controller.addUser);
app.get('/users',user_controller.getUsers);



app.listen(PORT, function(){
    console.log(`App has started to run, listening to port ${PORT}`);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
     console.log('Success: Connected to your DB');
    })
    .catch(function(error){
        console.log('Failed to connect:' , error.message);
     
    });
});