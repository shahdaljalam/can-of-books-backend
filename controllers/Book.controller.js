'use strict';

// const { request } = require('express');
const {userModel} = require('../models/user.model');

const getBooks = (req , res) => {
    const {email}= req.query;
    console.log( req.query);
    userModel.find({email:email}, (error, user) => {
        console.log(user)
        if (error){
            res.send(error)
        }
        else{
            console.log(user)
            res.json(user)
            
        }
    });
    // userModel.find(user=>{
    //     console.log(user);
    // })
}
// const createBook = (request,response)=>{
//     const { userEmail,bookName } = request.body;
//     userModel.findOne({email: userEmail}, (error, userData)=>{
//         if(error){
//             response.send(error)

//         }else{
//             userData.books.push({name: bookName});
//             userData.save();
//             response.json(userData);
//         }
//     })
// }
// const updateBook = (request,responce)=>{
//     const bookIndex=request.params.book_idx;
//     const {userEmail,bookName}=request.body;

//     userModel.findOne({email: userEmail},(error,userData)=>{
//         if(error){
//             responce.send(error)
//         }else{
//             userData.books.splice(bookIndex,1,{name: bookName});
//             userData.save();
//             responce.send(userData)
//         }
//     });
// }
module.exports=getBooks;