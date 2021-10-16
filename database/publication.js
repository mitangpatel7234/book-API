const mongoose = require("mongoose");


//create book schema 

const PublicationSchema = mongoose.Schema({
    ISBN: "string",
    title: "string",
    pubDate: "string",
    language: "string",
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [Number]
});

const PublicationModel = mongoose.model("publications",PublicationSchema);


module.exports = PublicationModel;