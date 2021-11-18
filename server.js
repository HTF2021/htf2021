const express = require('express');
const app = express(), port = process.env.PORT || 3001 ;

app.use(express.static('public'));

app.listen(port, () => console.log(`Listening at port ${port}`));