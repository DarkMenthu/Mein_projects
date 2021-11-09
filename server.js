const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methondOverride = require('method-override')
const app = express()

app.use(express.static(__dirname + '/public'));
const port = 3000

mongoose.connect(
    'mongodb+srv://dbTest:password@testing.bwsrh.mongodb.net/test?authSource=admin&replicaSet=atlas-znx4oj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(methondOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' }) 
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)
app.listen(port) 