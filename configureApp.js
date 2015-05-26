var prompt = require('prompt');

prompt.start();
prompt.get([{
    name: 'listenHost',
    description: 'Application Listen Host',
    default: '127.0.0.1',
    required: true
}, {
    name: 'listenPort',
    default: '42001',
    description: 'Application Listen Port',
    required: true,
    conform: function(value) {
        return true;
    }
}], function(e, result) {
    if (e) throw e;
    console.log(result);
});