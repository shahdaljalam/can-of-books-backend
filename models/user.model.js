'use strict';
const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mangoose.Schema({
email:{type:String},
books:[bookSchema]
});

const userModel = mongoos.model('users',userSchema);

const seedUserData = () => {
    const newUser = new userModell ({
        email: 'shahd.jm33@gmail.com',
        books: [{
            name:'Magic Tree House',
            description:'Visit the magic tree house and start a time traveling adventure with the first four stories in the #1 bestselling chapter book series of all time! Four books included in one perfectly giftable box set!',
            status:'',
        },
        {
            name:'Goodnight Moon',
            description:'In this classic of childrens literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day',
            status:'',
        },
        {
            name:'Haven Point',
            description:'A sweeping debut novel about the generations of a family that spends summers in a seaside enclave on Maines rocky coastline, for fans of Elin Hilderbrand, Beatriz Williams, and Sarah Blake.',
            status:'',
        }

    ]
    })
newUser.save();
}
module.exports= userModel;
module.exports= seedUserData;

