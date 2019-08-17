const mongo = require("./connect");
const { DB_NAME } = require("./config");
const ObjectId = require('mongodb').ObjectID

module.exports = {
    getFilms: function(){
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find().toArray();
        return resp;
    },
    getFilmByID: function(_id){
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").find({ _id }).toArray();
        return resp;
    },
    postFilm: function(film) {
        const db = mongo.instance().db(DB_NAME);
        const resp = db.collection("films").insertOne(film);
        return resp;
    },
    deleteFilmById: function(_id){
        const db = mongo.instance().db(DB_NAME)
        const resp = db.collection("films").deleteOne({_id: ObjectId(_id)})
        return resp
    }
}