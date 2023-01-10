const mongoose = require("mongoose")

const main= async ()=>{
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/masai")
        console.log("Added Something")
        await MasaiModel.insertMany([{"name":"Shravani","studentcode":082,"batch":"Web-22"}])
        console.log("Inserted")
        let s = await MasaiModel.find()
        console.log(s)
    }catch(err){
        console.log(err)
    }
 

}
main()

const masaiSchema = mongoose.Schema({
    name:String,
    studentcode:Number,
    batch:String
},{
    versionKey:false
})

const MasaiModel = mongoose.model("student",masaiSchema)