const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Server-Side Rendering with Node.js' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});