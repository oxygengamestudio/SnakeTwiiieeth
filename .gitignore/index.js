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


// Create a client with our options
const client = new tmi.client(options);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();


function isSubscriber(user){
  return user.subscriber;
}

function isModerator(user){
  return user.mod;
}

function isBroadcaster(user){
  return user.badges.broadcaster == '1';
}
w

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!liens') {
    client.say(target, `Facebook: https://www.facebook.com/MasterSnakou | Twitter: https://twitter.com/MasterSnakou | Youtube: https://www.youtube.com/user/MasterSnakou | Youtube Replay: https://www.youtube.com/user/SnakouReplay | Instagram: https://www.instagram.com/mastersnakou | Snapchat: https://www.snapchat.com/add/mastersnakou`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!discord') {
    client.say(target, `Rejoins le Discord ici: https://discord.gg/snakou (⚠️ Pense à lire le salon #accueil pour accepter les règles et avoir accès à tous les salons !)`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!prime') {
    client.say(target, `imGlitch Tu veux t'abonner tous les mois sans pour autant débourser 5€ par mois? La solution : TWITCH PRIME : http://wzb.lv/AmazonPrime C'est un abonnement (GRATUIT LE PREMIER MOIS) que tu payes 25€ par an (pour les moins de 25 ans) et qui te permet de t'abonner tous les mois à 1 chaîne Twitch de ton choix. Tu as aussi des jeux et plein de bonus gratuits tous les mois! :) DO IT! \o/`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!wallpaper') {
    client.say(target, ` utilise Wallpaper Engine disponible sur STEAM: http://wzb.lv/5c14434c0`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!miel') {
    client.say(target, `Achète du Miel Goadien ici: http://www.unesaisonauxabeilles.com`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!uptime') {
    client.say(target, `Attend`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (commandName === '!sub') {
    client.say(target, ` Pour Sub et rejoindre les rangs: https://www.twitch.tv/subs/mastersnakou`);
    console.log(`* Executed ${commandName} command`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

  if (self) return;
  let sender = user['display-name']

  if (user['mod'] === false){
    if(Message.inludes("www.") || message.includes(".com")){
      client.timeout(channel, sender, 30, "Liens");
    }
  }
}

function onsubscription (channel, username, method, message, userstate) {
  client.say(channel, "Merci d'avoir SUB !")
  client.emoteonly("CooxyBot");
});

function onfollow (channel, username, method, message, userstate) {
  client.say(channel, "Merci d'avoir SUB !")
  client.emoteonly("CooxyBot");
});

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  client.action('CooxyBot', `* Connecté au serveur : ${addr}:${port}`);
}

