var express = require('express');
var app = express();

app.use(express.static('public'));

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
