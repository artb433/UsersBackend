function addUser(req, res){
 try {
    res.status(200).json({message: 'new user added'})
 } catch (error) {
     res.status(404).json({message: 'couldn\'t add user'})
 }
}

function getUsers(req, res){
try {
    res.status(200).json({
        user:[
          {first_name:'',last_name:'',date_of_birth:'',school:''},
          {first_name:'',last_name:'',date_of_birth:'',school:''},
          {first_name:'',last_name:'',date_of_birth:'',school:''},

        ]
    })
} catch (error) {
    res.status(400).json({message:'Failed to fetch users'})
}
}

module.exports ={
    addUser,
    getUsers
}