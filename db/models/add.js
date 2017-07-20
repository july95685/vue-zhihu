"use strict";
var db = require("../db");
var mongoose = require('mongoose');
var classSchema = new mongoose.Schema({
        name:String,
        studentId:Number
    })
var classModel = mongoose.model('newClass',classSchema);
console.log('addData');
var newStudent = {
    name:'Dva',
    studentId:'003'
}
// var userInsert = new classModel(newStudent);
// userInsert.addData = function(){
//     var userInsert = new classModel(newStudent);
//     userInsert.save(function(err){
//         if(err){
//             return console.log(err);
//         }
//         console.log('添加成功');
//     })
// }
var classModel = db.model('newClass',classSchema)
var addData = function(){
    console.log('addData');
    var newStudent = {
        name:'Dva',
        studentId:'003'
    }
    var userInsert = new classModel(newStudent);
    userInsert.save(function(err){
        if(err){
            return console.log(err);
        }
        console.log('添加成功');
    })

}
var data = {}
data.add = addData;
module.exports = data;
