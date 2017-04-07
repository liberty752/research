var getSprites = function(fileData) {
	var lines = fileData.split('\r\n');
	var sprites = [];
	var className = '';
	for (var i = 0; i < lines.length; i++) {
		var line = lines[i];
		if (className == '') {
			var classNameTmp = line.match(/^\s*class\s*(\w+)\s*\{\s*$/i);
			if (classNameTmp != null && classNameTmp.length >= 2) {
				className = classNameTmp[1];
			}
		} else {
			var spriteTmp = line.match(/IDX_SPRITE_([a-zA-Z0-9_]+)/);
			if (spriteTmp != null && spriteTmp.length >= 1) {
				sprites.push(className + '::' + spriteTmp[0]);
			}
		}
	}
	return sprites;
};

module.exports = {
	getSprites : getSprites
};