const mongoose = require("mongoose");


//create book schema 

const AuthorSchema = mongoose.Schema({
    ISBN: "string",
    title: "string",
    pubDate: "string",
    language: "string",
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [Number]
});

const AuthorModel = mongoose.model("authors",AuthorSchema);


module.exports = AuthorModel;