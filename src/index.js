const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
//morgan
app.use(morgan('combined'));
//Handlebars
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    }),
);
        app.set('view engine', 'hbs');
app.set('views', 'views');
    app.set('views', path.join(__dirname, 'resources/views/'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
