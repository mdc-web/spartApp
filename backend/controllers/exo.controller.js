const exoModel = require('../models/exo.model');
const ExoModel = require('../models/exo.model');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readExo = (req, res) => {
    ExoModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
}

module.exports.createExo = async (req, res) => {
    const newExo = new exoModel({
        posterId: req.body.posterId,
        nom: req.body.nom,
        serie: req.body.serie,
        rep: req.body.rep,
        recup: req.body.recup
    });
    try {
        const post = await newExo.save();
        return res.status(201).json(post);
    } catch (err) {
        return res.status(400).send(err);
    }
};


module.exports.updateExo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    const updatedRecord = {
      nom: req.body.nom,
      serie: req.body.serie,
      rep: req.body.rep,
      recup: req.body.recup
    };
  
    ExoModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Update error : " + err);
      }
    );
  };

  module.exports.deleteExo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    ExoModel.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    });
  };