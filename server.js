const express = require('express'); // Package to get the express object constructor
const bodyParser = require('body-parser');
require('dotenv').config();

const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const roleRoutes = require('./routes/role.routes');
const cartRoutes = require('./routes/cart.routes');

const {dbSync, syncTable} = require('./config/db_sync');

const app = express(); // this function returns an express object which has the capabilitites to handle server side requests

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

// Registering the routes
categoryRoutes(app);
productRoutes(app);
authRoutes(app);
roleRoutes(app);
cartRoutes(app);

if(process.env.SYNC) {
    // dbSync(true);
    syncTable(false, true, require('./models/index').Cart)
    .then(() => {
        syncTable(false, true, require('./models/index').Product)
        .then(() => {
            syncTable(false, true, require('./models/index').Cart_Products);
        })
    })
    

}

const PORT = process.env.PORT; // this will be the port on our local system where server will run

app.get('/home', (req, res) => {
    res.render('home');
})


app.listen(PORT, () => { // listen function registers the app for the port
    console.log(`Server started on Port ${PORT}`)
})
