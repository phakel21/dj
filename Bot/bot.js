// const { Telegraf } = require('telegraf')


// const TOKEN = '7186227610:AAFINi141u4RKGRGJssIRAUDnuYxrDFOakM'

// const web_link = 'https://velvety-lollipop-e867de.netlify.app/'

// const bot = new Telegraf(TOKEN)
// bot.start((ctx) => 
// ctx.reply('Welcome', {
//     reply_markup: {
//         keyboard: [[{
//             text: "Web app",
//             web_app: {
//                 url: web_link
//             }
//         }]],
//     },
// }));

// bot.launch()

const { Markup, Telegraf } = require("telegraf");
// const { link } = require('telegraf/format')

// import { Telegraf } from "telegraf";
// import { link } from "telegraf/format";

const TOKEN = "7186227610:AAFINi141u4RKGRGJssIRAUDnuYxrDFOakM";
const bot = new Telegraf(TOKEN);

const web_link = "https://velvety-lollipop-e867de.netlify.app/";

// bot.start((ctx) =>
//   ctx.reply("Welcome :)))))", {
//     reply_markup: {
//       keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
//     },
//   })
// );

// bot.launch();


bot.start(ctx => {
  return ctx.reply(`Hello ${ctx.update.message.date}!`);
});
bot.launch();