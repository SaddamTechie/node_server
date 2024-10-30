const {Router} = require('express');

const bookRoute = Router();

bookRoute.get('/',(req,res)=>res.send('<h1>All Books</h1>'))

bookRoute.get('/:bookId',(req,res)=>{
    res.send(`<h1>BookID : ${req.params.bookId}</h1>`)
})

bookRoute.get('/:bookId/reserve',(req,res)=>{
    res.send(`<h1>Book ${req.params.bookId} Reserve</h1>`)
})

bookRoute.post('/:bookId/reserve',(req,res)=>{
    let receivedData = req.body;
    receivedData['id'] = req.params.bookId
    res.status(200)
    res.json({ message: 'Data received successfully', data: receivedData });
})

module.exports = bookRoute