let push = require("web-push");

let vapidKeys =  {
        publicKey: 'BNj-X9nJYaSDkzfXQyUrxEtZgmMA-AD-9nKVxgROTYT-3B7ZZNGCxKvVjVZxf8NNlRxpOF6EAZBKRP8glnaccjg',
        privateKey: 'l-f1yD-IScuHrfApzpeIA0CiVY_PRWzC19h-uv0gKtg'
};

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {}

console.log(vapidKeys);
