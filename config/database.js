const mongoose = require('mongoose');
const devConnectionString = 'mongodb://localhost:3000/justinthyme';
const db = mongoose.connection;



mongoose.connect(process.env.DATABASE_URL || devConnectionString,{
useNewUrlParser: true
})

db.on(`connected`, ()=> {
    console.log(`Database Server: ${db.host} connected on port ${db.port}`)
});

db.on('error', (err) =>{
    console.log(`The database Server Threw an error ${err}`);
})

//MongoDB - Check the stitch application for the info on the blog posts that he
// referenced 

//Talk with the MongoDB presneter on the information thath eposted. 
// github from speaker: gihub.com/brittonlaroche/mongoDB-Demos
//cloud.mongodb.com -> stitch -> look into twillio "server side sms"
//Speak with Britton to see if he will be available for the demo. 
//Uses trillio to setup responses from cell phones and was able to gather info
// from the datbase and send reports.

//YOu can now do a databse joint. Transactions are new], he has a tutorial, how to retry in a loop if you have an issue.
