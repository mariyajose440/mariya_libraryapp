const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@fsddatabase.ttpro.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
    const Schema=mongoose.Schema;
    const upschema= new Schema(
    {
        name:String,
        email:String,
        phone:String,
        password:String,
        repassword:String
    });
    var updata=mongoose.model('up',upschema);
    module.exports=updata;