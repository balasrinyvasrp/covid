const Telegraf=require('telegraf')
require('dotenv').config()
const token=process.env.BOT_TOKEN
const bot=new Telegraf(token)
bot.use(Telegraf.log())
const Extra=require('telegraf/extra')
const Markup=require('telegraf/markup')
bot.hears('markdown',ctx =>ctx.reply('*bold text*',Extra.markdown()))
bot.hears('markdown1',ctx =>ctx.reply('_italic_text',Extra.markdown()))
bot.hears('markdown2',ctx =>ctx.reply('[inline url](https://offermania.co/)',Extra.markdown()))
bot.start(ctx=>ctx.reply('Welcome '+ctx.from.first_name))
bot.help(ctx=>ctx.reply('Help page for @testing20201bot'))
bot.command(['command1','command2'],ctx=>ctx.reply('Command 1 Ok 👌'))
bot.command('html',ctx=>ctx.reply(
'<b>Bala</b>,<strong>Bala</strong>,<i>Bala</i>\
<a href="https://bala.com/">inline</a>',Extra.HTML().webPreview(false)

))







bot.command('inline',ctx=>ctx.reply(`Random image <a href="${random('dog')}"> DOG </a>`,
Extra.HTML().markup(
    m=>inline(m)
    )
)
)
bot.action('dog',ctx=>ctx.editMessageText(`Random image<a href="${random('dog')}"> DOG </a>`,
Extra.HTML().markup(
    m=>inline(m)
    )
))
bot.action('cat',ctx=>ctx.editMessageText(`Random image <a href="${random('cat')}"> CAT </a>`,
Extra.HTML().markup(
    m=>inline(m)
)
))
bot.action('bear',ctx=>ctx.editMessageText(`Random image <a href="${random('bear')}"> BEAR </a>`,
Extra.HTML().markup(
    m=>inline(m)
)
))
bot.action('monkey',ctx=>ctx.editMessageText(`Random image <a href="${random('monkey')}"> MONKEY </a>`,
Extra.HTML().markup(
    m=>inline(m)
)
))
bot.command('custom',ctx=>ctx.reply('Keyboard',Markup.keyboard([['Dog','Elephant','Lion'],['Bear','Monkey','Bird']]).resize().extra()))
let re=/^[0-9]*$/
if(parseInt(re)>=18)
{
    var m='adult';
}
else
{
    var m='underage';
}
const fs=require('fs')
bot.hears(re,ctx=>
    {
     if(parseInt(ctx.message.text)>=18)
     {   
    var m='adult'
    }
    else
    {
        var m='underage'
    }
    ctx.reply('You are '+m)
    })
    bot.hears('document',ctx=>
        {
            ctx.replyWithDocument({url:'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',filename:'smaple.pdf'})
        })
        bot.hears('image',ctx=>
        {
            ctx.replyWithPhoto({source:fs.readFileSync('New Folder/download.jpg'),filename:'smaple.img'})
        })
        bot.hears('photo',ctx=>
        {
            ctx.replyWithPhoto({url:'https://maveric-systems.com/wp-content/uploads/2019/08/dummy-image-testimonial-300x298.jpg',filename:'smaple.pdf'})
        })
        bot.hears('video',ctx=>
        {
            ctx.replyWithVideo({url:'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',filename:'smaple.pdf'})
        }) 
bot.hears('Dog',ctx=>ctx.reply(`<a href="${random('dog')}">DOG</a>`,Extra.HTML()))
bot.hears('Elephant',ctx=>ctx.reply(`<a href="${random('elephant')}">ELEPHANT</a>`,Extra.HTML()))
bot.hears('Lion',ctx=>ctx.reply(`<a href="${random('lion')}">LION</a>`,Extra.HTML()))
bot.hears('Monkey',ctx=>ctx.reply(`<a href="${random('monkey')}">MONKEY</a>`,Extra.HTML()))
bot.hears('Bear',ctx=>ctx.reply(`<a href="${random('bear')}">Bear</a>`,Extra.HTML()))
bot.hears('Bird',ctx=>ctx.reply(`<a href="${random('bird')}">Bird</a>`,Extra.HTML()))
const random = tag=>
{
    let imgId=Math.trunc(Math.random()*1000) 
    let url=`https://loremflickr.com/g/320/240/${tag}/?lock=${imgId}`
    return url
}
bot.on('text',ctx=>
{
    ctx.reply('Hello ')
})
bot.on('photo',ctx=>
{
    ctx.reply('Hello this photo is nice.')
    
})
bot.on(['sticker','video'],ctx=>
{
    ctx.reply('Hello this is awesome.')
    
})
const inline= (m)=>m.inlineKeyboard(
    [
    [m.callbackButton('Next dog','dog'),m.callbackButton('Next cat','cat')],
    [m.callbackButton('Next Bear','bear'),m.callbackButton('Next Monkey','monkey')]
    ]) 
bot.hears('Hello World',ctx=>ctx.reply('Hi There'))
bot.launch()
//https://api.telegram.org/bot1058721816:AAEuCuUrNmbs4g3cXr96KvpWFNJj8lcqD1k/getUpdates