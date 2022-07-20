const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))
app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.rkydb.mongodb.net/todos', {
            useNewUrlParser: true
        });
        app.listen(PORT, () => {
            console.log('Server has been started...');
        });
    } catch (err) {
        console.log(err);
    }
}

start();

