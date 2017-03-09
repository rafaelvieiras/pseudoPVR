var db          = require('diskdb')
, path          = require('path');


db = db.connect('./db', ['mediafolder']);


var list = function(req, res){
    var mediafolders = db.mediafolder.find();
    return res.status(200).json(mediafolders);
}

var save = function(req, res){
    var response = null
    , datapath = {
        fullPath: req.params.path
    }
    // console.error(req);
    if(req.body.readpath){
        if(!req.body.path){
            // response = path;
            console.log(path.join(__dirname, "locale"));
        }
    }else{
        response = db.mediafolder.save(datapath);
    }
    return res.status(200).json(response);
}


var info = function(req, res){
    console.log(req.params.id);
    return res.status(200).json(videoDemo);
};



module.exports = {
    list: list,
    info: info,
    save: save
}