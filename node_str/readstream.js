var fs = require('fs');

var readStream = fs.createReadStream('TextEditor.cpp');

readStream.on('open', function(fd) {
	console.log('文件已打开');
});

readStream.on('data', function(data) {
	console.log('收到文件数据');
	console.log(data.toString());
});