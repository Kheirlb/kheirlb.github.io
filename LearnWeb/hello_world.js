var asana = require('asana');

// replace with your personal access token.
var personalAccessToken = '0/4ef3ac997cb6720135e9fd4093bca601';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

// Get your user info
client.users.me()
  .then(function(me) {
    // Print out your information
    console.log('Hello world! ' + 'My name is ' + me.name + ' and my primary Asana workspace is ' + me.workspaces[2].name + '.');
});
