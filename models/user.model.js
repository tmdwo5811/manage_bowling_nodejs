const mongoose = require('mongoose');
const MongoPaging = require("mongo-cursor-pagination");
const Schema = mongoose.Schema;
const schemaOptions = {versionKey: false};

const ACCOUNTSchema = new Schema({
    name: {
        type: String
    }
}, {versionKey: false});

ACCOUNTSchema.index({name: 1});

// module.exports = ACCOUNTSchema;

ACCOUNTSchema.plugin(MongoPaging.mongoosePlugin);
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model("account", ACCOUNTSchema, "account");
