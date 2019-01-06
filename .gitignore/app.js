const tmi = require("tmi.js");

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "cooxybot",
        password: "oauth:kqboawtmb28kk9kxu9lvq9yp2xhsgs"
    },
    channels: ["#cooxybot"]
};

const client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("chat",  (channel, user, message, self) => {

    if (self) return;
    let sender = user['display-name']

    if(user['mod'] === false){
        if(message.includes("www.") || message.includes(".com") || message.includes(".fr")){
            client.timeout(channel, sender, 30, "Pas de liens :) !")
        }
    }

    if(message === "!hi"){
        client.action("cooxybot","Coucou")
    }


});
