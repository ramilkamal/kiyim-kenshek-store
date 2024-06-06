const { Telegraf } = require('telegraf');
require('dotenv').config();
const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Web-app listening on port ${port}`);
});

const web_link = 'https://kiyim-nukus.netlify.app/';
const start_msg = 'Assalamu Aleykum! \nXush kelibsiz!';

bot.start((ctx) =>
    ctx.reply(start_msg, {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Kiyim Do'kon",
                        web_app: { url: web_link },
                    },
                ],
            ],
            resize_keyboard: true,
        },
    })
);

bot.launch();
