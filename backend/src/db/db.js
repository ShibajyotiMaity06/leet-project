const mongoose = require('mongoose')

const connectDb = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db.js is fine bro')
    } catch (err) {
        console.error('error in db.js' , err)
        process.exit(1)
    }
}

module.exports = connectDb;