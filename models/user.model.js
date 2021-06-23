'use strict';
const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('user', userSchema);

const seedUserData = () => {
    const salamUSer = new userModel({
        email: 'salammustafa728@gmail.com',
        books: [{
            name: 'Magic Tree House',
            description: 'Visit the magic tree house and start a time traveling adventure with the first four stories in the #1 bestselling chapter book series of all time! Four books included in one perfectly giftable box set!',
            status: 'avaliable'
        },
        {
            name: 'Goodnight Moon',
            description: 'In this classic of childrens literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day',
            status: 'avaliable'
        },
        {
            name: 'Haven Point',
            description: 'A sweeping debut novel about the generations of a family that spends summers in a seaside enclave on Maines rocky coastline, for fans of Elin Hilderbrand, Beatriz Williams, and Sarah Blake.',
            status: 'avaliable'
        }

        ]
    })
    // const shahidUser = new userModel({
    //     email: 'salammustafa728@gmail.com',
    //     books: [{
    //         name: 'Magic Tree House',
    //         description: 'Visit the magic tree house and start a time traveling adventure with the first four stories in the #1 bestselling chapter book series of all time! Four books included in one perfectly giftable box set!',
    //         status: 'avaliable'
    //     },
    //     {
    //         name: 'Goodnight Moon',
    //         description: 'In this classic of childrens literature, beloved by generations of readers and listeners, the quiet poetry of the words and the gentle, lulling illustrations combine to make a perfect book for the end of the day',
    //         status: 'avaliable'
    //     },
    //     {
    //         name: 'Haven Point',
    //         description: 'A sweeping debut novel about the generations of a family that spends summers in a seaside enclave on Maines rocky coastline, for fans of Elin Hilderbrand, Beatriz Williams, and Sarah Blake.',
    //         status: 'avaliable'
    //     }

    //     ]
    // })
        
    salamUSer.save();
    // shahidUser.save();
}

module.exports = {seedUserData,userModel}

