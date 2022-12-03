const express = require('express');
const app = express();
const path = require('path');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//requires a middleware function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Route
app.use('/admin', adminRoute);
app.use(shopRoute);

// Not Found routes
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
