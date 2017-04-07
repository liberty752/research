var fs = require('fs');
var iconv = require('iconv-lite');

var getFolderFileNames= function(dirPath) {
	var files = [];
	if (fs.existsSync(dirPath)) {
		var filesTemp = fs.readdirSync(dirPath);
		filesTemp.forEach(function(file, index) {
			var curPath = dirPath + '/' + file;
			files.push(curPath);
		});
	}
	return files;
};

var getFileDataGBK = function(filePath) {
	var txt = iconv.decode(fs.readFileSync(filePath),'GBK');//使用GBK解码
	return txt;
};

module.exports = {
	getFolderFileNames:getFolderFileNames,
	getFileDataGBK : getFileDataGBK
};
