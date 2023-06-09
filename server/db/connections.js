const mongoose = require("mongoose")
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    // useFindAndModify: false
}
const LOCAL_URL = process.env.LOCAL_URL
const PROD_URL = "mongodb+srv://busapp:busapp@cluster0.tbmddbb.mongodb.net"
const connectWithDB = (uri) => {
    mongoose.connect(uri, options).then(() => console.log("connected to databse")).catch((err) => {
        throw err
    })

}
connectWithDB(PROD_URL)
module.exports = connectWithDB