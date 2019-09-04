# Slack Bot Skeleton

A starter that can jump start you onto creating your own slack bot.

This is based off of a very early version of [Karmabot](https://github.com/AlexanderPruss/KarmaBot). You can take a look at 
[Karmabot's implementation](https://github.com/AlexanderPruss/KarmaBot) to see what a more robust, AWS Lambda ready bot 
can look like. 

## Dependency to Ngrok

This basic slack bot is intended to run locally on a koa web server. It communicates with Slack through `ngrok`.

You'll want ngrok installed and in your path  - see https://ngrok.com/download

## How to Use

Install dependencies and compile the app with 

    npm i && npm run build
    
Create your slack app at https://api.slack.com/. You'll need to add a bot user and connect the app to the Events API.
To connect to the events API, slack has to actually be able to talk to your app, so we'll need to start it.

Modify the configuration in `config/dev.json` with the parameters that slack has generated for you. Then, 
set `NODE_ENV=dev` to make sure the app uses the right configuration.    
The app starts on port 3000 by default. Start it up and expose it to the world (gulp) with ngrok:

    export NODE_ENV=dev
    npm run start
    
    #in another terminal window
    ngrok http 3000
    
You can then verify your events API URL by telling Slack to send events to:

    `${ngrok-url}/slack/events