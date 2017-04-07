var conf = require('./config.js');
var fileProgress = require('./fileProgress.js');
var stringProgress = require('./stringProgress.js');

var files = fileProgress.getFolderFileNames(conf.path.headers);
for (var i = 0; i < files.length; i++) {
	var file = files[i];
	var fileData = fileProgress.getFileDataGBK(file);
	var sprites = stringProgress.getSprites(fileData);
	console.log(sprites);
}
