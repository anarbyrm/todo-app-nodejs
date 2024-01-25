const path = require('path');

const express = require('express');

const index = require('./controllers/index');
const taskRoutes = require('./routers/tasks');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', index.getIndexPage);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log('Server is running...');
    console.log(`Listening to incoming requests on port ${PORT}`);
});