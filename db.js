const mongoose = require('mongoose')
const connectionString='mongodb://localhost:27017/cart';
//const connectionString='mongodb+srv://kami:rnPKMYgiITudpkc6@cluster0.o2ew9.mongodb.net/gm_Insurance?retryWrites=true&w=majority'
mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true,'useCreateIndex':true},(err,client)=>{
    
    module.exports=client
const app=require('./app');
let port=3787;
/*var fp = require("find-free-port")
fp(3000, function(err, freePort){
port=freePort;
});*/
app.listen(port,() => console.log(`Example app listening on port ${port}!`));
});
//app.listen(3000);'72.167.224.91',

