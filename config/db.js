const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);


const connection = mongoose.connect("ongodb+srv://alikhanumar795:ultrasound4052@merncluster.umrdcnt.mongodb.net/?retryWrites=true&w=majority&appName=mernCluster");
module.exports = { connection };
