var prompt = require('prompt'),
    config = require(__dirname + '/configs/network');

prompt.start();
prompt.get(config, function(e, result) {
    if (e) throw e;
    console.log(result);
});