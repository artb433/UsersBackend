const express = require('express');
const app = express();
const user_controller = require('./controllers/user_controller');
const mongoose = require ('mongoose');


app.get('/users',user_controller.getUsers);
app.post('/user',user_controller.addUser);

app.listen(7000, function(){
    console.log(`App has started to run`);
    mongoose.connect('')
    .then(function(){
     console.log('Success: Connected to you DB');
    })
    .catch(function(error){
        console.log('Failed to connect:' , error.message);
     
    });
});