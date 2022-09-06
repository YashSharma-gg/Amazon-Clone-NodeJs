console.log('Hello, World'); // Prints Hello World


// IMPORT FROM PACKAGES
const express = require('express'); 
const mongoose = require('mongoose');

// IMPORT FROM FILES 
const authRouter = require('./routes/auth')

// INIT
const app = express(); // here we are initializing express as app
const PORT = 3000;
const db = "mongodb+srv://yash:yash123@cluster0.akjtmfc.mongodb.net/?retryWrites=true&w=majority" 

// MIDDLEWARE
app.use(express.json());
app.use(authRouter);

// Connections
mongoose.connect(db).then(()=>{
    console.log('Connection Successful');
}).catch((e)=>{
    console.log(e)
})

// Creating an API
// http://<youripaddress>/hello-world
// app.get('/', function (req, res){
//     res.json({'name': "Yash Sharma"})
// })


// app.get('/hello-world', function(req, res){
    
//     res.json({hi: "hello world"});
// })


// CREATE, READ, UPDATE, DELETE => CRUD


app.listen(PORT,'0.0.0.0',() =>{ 
    console.log(`connected at port ${PORT}`);
})
