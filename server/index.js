const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const config = require("config");
const router = require('./routes/user.routes');


const app = express();
const PORT = process.env.PORT || config.get('serverPort')
app.use(cors());
app.use(express.json());
app.use('/api', router);


const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}


start()


