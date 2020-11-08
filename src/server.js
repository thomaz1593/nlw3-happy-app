//  import package
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//  starting the express
const server = express()
server
    // using body from req
    .use(express.urlencoded({extended: true}))

    //  using statics files
    .use(express.static('public'))

    //  set up template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //  create application routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//  turn on the server
server.listen(5500)