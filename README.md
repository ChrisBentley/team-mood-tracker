# pull-request-fetcher

## Description

This is a bot built using [botkit](https://github.com/howdyai/botkit) which acts as a slash-command for slack. The slash-command `/mood` will store the value between 1 and 10 to a database.

e.g.:

![slack-example.png](./images/slack-example.png)

## How it's setup

Setup as an app on slack, configured [here](https://api.slack.com/apps/XXXXXX)


## How to develop further

This bot was setup by following [this](https://api.slack.com/tutorials/easy-peasy-slash-commands) guide. I recommended reading through it if this is your first time developing a slash command or slack bot of any kind.

If you wish to develop locally you should:
* Checkout/Clone this repo
* Decrypt the env.js.gpg file
* Start the app using `npm start`
* Create a route to your localhost using ngrok/localtunnel (as described [here](https://api.slack.com/tutorials/easy-peasy-slash-commands))
* Modify the [slack app](https://api.slack.com/apps/A6N9C9ML5/slash-commands) routes to point towards the external url you setup using ngrok/localtunnel (see screenshots below).
* Begin your coding!


You want to edit the Slash Commands Request URL:
![slack-app-slashcommands.png](./images/slack-app-slashcommands.png)

and the OAuth Redirect URL:
![slack-app-oauth.png](./images/slack-app-oauth.png)



TODO:
- Create a graphing function