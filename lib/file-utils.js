var _ = require('underscore'),
logger = require('winston');


/**
 Reads a folder and writes all files to a json
 @param dir         string, Directory with files
 @param suffix      The file suffix
 @param callback    The Callback function
 */
exports.getLocalFiles = function (dir, suffix, callback) {
    var fs = require('fs-extra'),
        walk = require('walk'),
        path = require('path');

    var walker = walk.walk(dir);
    var returnFiles = [];
    var uniqueFileNames = {};
    walker.on('file', function(root, fileStat, next) {
        var filePath = path.join(root, fileStat.name);
        root = path.normalize(root);
        if (fileStat.name.match(suffix)) {
            var fileObject = { 'href': filePath, 'dir': root, 'file': fileStat.name };
            if (!uniqueFileNames.hasOwnProperty(fileObject.file)) {
                returnFiles.push(fileObject);
                uniqueFileNames[fileObject.file] = true;
            }
        }

        next();
    });

    walker.on('end', function(err) {
        callback(err, returnFiles);
    });
};
