var mongoose=require('mongoose');

exports.ToDoSchema=new mongoose.Schema({
	description:{type:String,requried:true},
	due:{type:Date,required:true},
	done:{type:Boolean,default:false}
});