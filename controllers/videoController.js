var db          = require('diskdb');
db = db.connect('./db', ['videos']);

var videoDemo = {
    "title": "Who knows",
    "originaltitle": "Who knows for real",
    "sorttitle": "Who knows 1",
    "set": "Who knows trilogy",
    "rating": "6.100000",
    "year": "2008",
    "top250": "0",
    "votes": "50",
    "outline": "A look at the role of the Buckeye State in the 2004 Presidential Election.",
    "plot": "A look at the role of the Buckeye State in the 2004 Presidential Election.",
    "runtime": "90",
    "#text": " //runtime in minutes",
    "thumb": "http://ia.ec.imdb.com/media/imdb/01/I/25/65/31/10f.jpg",
    "mpaa": "Not available",
    "playcount": "0",
    "id": "tt0432337",
    "filenameandpath": "c:\\Dummy_Movie_Files\\Movies\\...So Goes The Nation.avi",
    "fileinfo": {
        "streamdetails": {
            
        }
    },
    "studio": "Dummy Pictures",
    "director": "Adam Del Deo",
    "actor": [
        {
            "name": "Paul Begala",
            "role": "Himself"
        },
        {
            "name": "George W. Bush",
            "role": "Himself"
        },
        {
            "name": "Mary Beth Cahill",
            "role": "Herself"
        },
        {
            "name": "Ed Gillespie",
            "role": "Himself"
        },
        {
            "name": "John Kerry",
            "role": "Himself"
        }
    ]
};


var list = function(req, res){
    var videos = db.videos.find();
    return res.status(200).json(videos);
}

var save = function(req, res){
    var video = db.videos.save(videoDemo);
    return res.status(200).json(video);
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