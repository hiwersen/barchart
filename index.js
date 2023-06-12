const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
    console.log(req.path);
    next();
})

app.use('/', express.static(__dirname + '/public'));

const listener = app.listen(port, () => {
    console.log(`Listening on port ${listener.address().port}`);
});