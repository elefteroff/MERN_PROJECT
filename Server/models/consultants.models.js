const mongoose = require('mongoose');

// the schema -> the rules that the entries in the db must follow
const ConsultantsSchema = new mongoose.Schema({ //in here you pass in the object of what you want to replicate in the database.
    consultantName: { 
        type: String,
        required: [true, "A name is required."], //Validations
        minlength: [3, "A {PATH} must be at least 3 characters long."] //Validations
    },
    specialty: { 
        type: String,
        required: [true, "A {PATH} is required."], //Validations
        minlength: [3, "{PATH} must be at least 3 characters long."] //Validations
    },
    subSpecialty: { 
        type: String,
        required: [true, "A subspecialty is required."], //Validations
    },
    timeZone: {
        type: String,
        required: [true, "Please choose a time zone."], //Validations
        minlength: [3, "{PATH} must be at least 3 characters long."] //Validations
    },
    billingRate: {
        type: String,
        required: [true, "Please choose your hourly billing rate."], //Validations
    },
    availForHire: {
        type: Boolean,
        default: false //in case someone bypasses the front end.  Can use a default for anything not just a boolean.
    },
    bio: {
        type: String,
        required: [true, "A {PATH} is required."], //Validations
        minlength: [30, "{PATH} must be at least 30 characters long."] //Validations
    },
}, { timestamps: true });

// the model -> this is what we use to make the actual queries to the db
const Consultants = mongoose.model("Consultants", ConsultantsSchema)
module.exports = Consultants