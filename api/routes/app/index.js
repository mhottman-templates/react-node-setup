var express = require('express'),
    router = express.Router();
var path = require('path');

const PUBLIC = path.join(__dirname, '../../public');

router.get('*', function(req, res) {
    res.sendFile('index.html', {
        root: PUBLIC
    });
});


module.exports = router;
