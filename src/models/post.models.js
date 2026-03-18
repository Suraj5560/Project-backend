const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModel = mongoose.model("post" , postSchema) // DB me data collection ke format pe saved hota hai all the same type of data like post will be saved in collection name post (monhoDB post alag se laga deta hai)

module.exports = postModel  