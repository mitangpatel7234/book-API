const mongoose = require("mongoose");


//create book schema 

const BookSchema = mongoose.Schema({
    ISBN: "string",
    title: "string",
    pubDate: "string",
    language: "string",
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [Number]
});

const BookModel = mongoose.model("books",BookSchema);


module.exports = BookModel;