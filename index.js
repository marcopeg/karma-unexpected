var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
    var unexpectedLibrary = path.join(path.dirname(require.resolve('unexpected')), '../unexpected.js');

    files.unshift(pattern(path.join(__dirname, 'adapter.js')));
    files.unshift(pattern(unexpectedLibrary));
};

framework.$inject = ['config.files'];
module.exports = {'framework:unexpected': ['factory', framework]};