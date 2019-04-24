const express = require('express')
const hbs = require('hbs')
const path = require('path')
const utils = require('./utils')
const app = express()
const port = 3000

const partialsView = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.set('views', partialsView)
    / hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'home',
        author: 'Wellington'
    })
})

app.get('/sobre', (req, res) => {
    res.render('sobre', {
        title: 'sobre',
        author: 'Wellington'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        author: 'Wellington'
    })
})

app.get('/cotacoes/:name', (req, res) => {
    const { name } = req.params
    utils.service({ name }, (data) => {
        res.render('cotacao', {
            title: 'cotações',
            data: data,
            author: 'Wellington'
        })
    })
})

app.get('/teste/:id', (req, res) => {
    if (req.params.id) {
        const pessoa = {
            name: 'wellington'
        }
        res.status(200).json(pessoa)
    }
    res.status(404).end()
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})