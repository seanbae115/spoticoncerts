const express = require('express');
const PORT =  process.env.PORT || 9000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>App is Working</h1>');
});

app.listen(PORT, ()=>{
    console.log('App running on PORT:' + PORT);
});