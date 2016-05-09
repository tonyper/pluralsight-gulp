module.exports = function() {
  var client = './src/client/';
  var clientApp = client + 'app/';

  var config = {
    temp: './tmp/',

    /* File paths */
    alljs: [
      './src/**/*.js',
      './*.js'
    ],
    sass: client + 'styles/*.??ss',
    index: client + 'index.html',
    client: client,
    js: [
      clientApp + '**/*.module.js',
      clientApp + '**/*.js',
      '!' + clientApp + '**/*.spec.js'  // do not take spec.js files
    ],
    bower: {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    }
  };

  config.getWiredepDefaultOptions = function() {
    return {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
  };

  return config;
};
