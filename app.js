const path = require('path');

const express = require('express');

const index = require('./controllers/index');
const taskRoutes = require('./routers/tasks');
const sequelize = require('./utils/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', index.getIndexPage);
app.use('/tasks', taskRoutes);

const PORT = 3000;

sequelize
    .sync()
    .then(result => {
        app.listen(PORT, () => {
            console.log('Server is running...');
            console.log(`Listening to incoming requests on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err)
    });