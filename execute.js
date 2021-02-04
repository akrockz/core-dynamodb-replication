// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
AWS.config.logger = console;
// Set the region
AWS.config.update({region: 'ap-southeast-1'});

var copy = require('./index').copy

// NONPRODAUTO
var sourceAWSConfig = {
  accessKeyId: '<nonprodauto-accesskey-id>',
  secretAccessKey: '<nonprodauto-secret-id>',
  // sessionToken: 'STSTOKENKEY',
  region: 'ap-southeast-1'
}
// PRODAUTO
var destinationAWSConfig = {
  accessKeyId: '<prodauto-accesskey-id>',
  secretAccessKey: '<prodauto-secret-id>',
  // sessionToken: 'STSTOKENKEY',
  region: 'ap-southeast-1' // support cross zone copying
}

// var sourceAWSConfig = new AWS.SharedIniFileCredentials({profile: 'sia-nonprod-auto-admin-scott'});
// // AWS.config.credentials = sourceAWSConfig;

// var destinationAWSConfig = new AWS.SharedIniFileCredentials({profile: 'sia-poc4-admin-scott'});
// // AWS.config.credentials = destinationAWSConfig;

copy({
    // config: sourceAWSConfig,
    source: {
      tableName: 'ce-adapt-uat-x-data-table', // required
      config: sourceAWSConfig // optional , leave blank to use globalAWSConfig
    },
    destination: {
      tableName: 'ce-adapt-master-x-data-table', // required
      config: destinationAWSConfig // optional , leave blank to use globalAWSConfig
    },
    log: true, // default false
    create : false , // create table if not exist
  },
  function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })