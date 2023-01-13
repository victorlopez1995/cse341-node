const mongodb = require("../db/mongodb");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb()
    .db()
    .collection('contacts')
    .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      });
}

const getSingle = async (req, res, next) => {
    // console.log(req.params.id);
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  const createSingle = async (req, res, next) => {
    const contact = req.body;
    const createContact = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .insertOne(contact).then(result => {
      res.status(201).json(result);
    })
    .catch(error => console.error(error))
  }

  const updateSingle = async (req, res, next) =>{
    const userId = new ObjectId(req.params.id);
    const contact = req.body;
    const update = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({_id: userId}, contact).then(result =>{
      res.status(204).send();
    })
    .catch(error => console.error(error))
  }

  const deleteSingle = async (req, res, next) =>{
    const userId = new ObjectId(req.params.id);
    const contact = req.body;
    const deleteContact = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .deleteOne({_id: userId}).then(result =>{
      res.status(200).send();
    })
    .catch(error => console.error(error))
  }
  

module.exports = { getAll, getSingle, createSingle, updateSingle, deleteSingle};