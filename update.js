var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "your access keys", "secretAccessKey": "your  secret access keys"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "YourTableName",
        Key: { 
            "Pk": "testing-1",
            "Sk": "testing-2"
         }, 
        UpdateExpression: "set fresher = :newFresher",
        ExpressionAttributeValues: {
            ":newFresher": "searchitem",
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success "+JSON.stringify(data) );
        }
    });
}

modify();