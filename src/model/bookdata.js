const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@fsddatabase.ttpro.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
    const Schema=mongoose.Schema;
    const bookschema= new Schema(
    {
        title:String,
        author:String,
        gen:String,
        dis:String,
        img:String
    });
    var bookdata=mongoose.model('bdata',bookschema);
    module.exports=bookdata;