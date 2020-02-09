var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "your access keys", "secretAccessKey": "your  secret access keys"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "YourTableName",
        Key: {
            "Pk": "acc#cf3d7b56-80b6-4980-bd58-e5302ea73c8a",
            "Sk": "#METADATA#cf3d7b56-80b6-4980-bd58-e5302ea73c8a"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            let rawData = data;
            
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();