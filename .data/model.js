const mongoose = require("mongoose");
const schema = mongoose.Schema;

const data = new schema({


});
//const data = mongoose.model(data);
module.exports = { data: data };

// const teamSchema = new Schema({
//     teamName: {type: String, required: true}, //UNIQUE tested in backend
//     notes: {type: String},
//     teamId: {type: String, required: true},//Random  unique ID
//     accuracy: {type: Number,default:isIt.YES}, //Accuray constant
//     // from logic
//     created_at: {type: Date, default: Date.now, required: true},
//     clientId: {type: String, required: true},
//     isDeleted: {type: Number, default: isIt.NO},
//   });

//   module.exports = mongoose.model(tables.TEAM, teamSchema);