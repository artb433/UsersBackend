const { async } = require('jshint/src/prod-params');
const User = require('../models/User');

async function addUser(req, res){
 try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
 } catch (error) {
    console.log("Can't add user: ", error.message);
     res.status(404).json({message: 'Can\'t add user'});
 }
}

async function getUsers(req, res){
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log('error fetching users', error.message);
        res.status(404).json({message: 'Can\'t retrieve all users'});
    }
// try {
//     const users = await 
//     res.status(200).json({
//         users:[
//           {first_name:'',last_name:'',date_of_birth:'',school:''},
//           {first_name:'',last_name:'',date_of_birth:'',school:''},
//           {first_name:'',last_name:'',date_of_birth:'',school:''},

//         ]
//     })
// } catch (error) {
//     res.status(400).json({message:'Failed to fetch users'})
// }

//kddijsskjfdlfkdjkfkdkkddk
}

module.exports = {
  addUser,
  getUsers,
}