// Where the CRUD is done
const Consultants = require('../models/consultants.models');

// CREATE
module.exports.createConsultants = (request, response) => {
    const { 
        consultantName,
        specialty,
        subSpecialty,
        timeZone,
        billingRate,
        availForHire,
        bio 
    } = request.body;
    Consultants.create({
        consultantName,
        specialty,
        subSpecialty,
        timeZone,
        billingRate,
        availForHire,
        bio
    }) //could also just pass the {request.body} object instead of listing out everything.
        // IMPORTANT: what we return here is what we receive in React!
        .then(newConsultant => response.json(newConsultant)) // the "newConsultant" is the new product that we are creating.
        .catch(err => response.status(400).json(err)); //do a status(400) for every .catch on all the controllers.
}

// READ
module.exports.getAllConsultants = (request, response) => {
    Consultants.find()
        .then(consultants => response.json(consultants)) // "consultants" represents all the consultants returned as an array.  If want to return as an object need to wrap "consultants" along with its key in {}.
        .catch(err => response.json(err))
}

module.exports.getOneConsultants = (request, response) => {
    Consultants.findById(request.params.id) //"Consultants" is referencing the model.
        .then(consultant => response.json(consultant))  //is returning the consultant we asked for by id.
        .catch(err => response.json(err))
}

// DELETE
module.exports.deleteOneConsultants = (request, response) => {
    Consultants.findByIdAndDelete(request.params.id) //"Consultants" is referencing the model.
        .then( (deleteOneConsultants) => response.json(deleteOneConsultants)) //"deleteOneConsultants" = the response (a.k.a. the data coming back in the response)
        .catch(err => response.json(err))
}