const mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://new_user_104:8XTCmEby8HTbq3m@lib.gojxs.mongodb.net/library?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://userone:userone@fsddatabase.ttpro.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const auth=new Schema({
    title:String,
    gen:String,
    dis:String,
    img:String
});
var authdata=mongoose.model('auth',auth);
module.exports =authdata;
