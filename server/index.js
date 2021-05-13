const express = require('express');
const WatchCtrl = require('./controllers/WatchCtrl');

const port = 3333

const app = express()


app.use(express.json)

app.get('/api/carted-watch', WatchCtrl.getCartedWatches);
app.post('/api/carted-watch', WatchCtrl.cartedWatch);
app.put('/api/carted-watch/:id', WatchCtrl.editModel);
app.delete('/api/carted-watch/:id', WatchCtrl.deleteWatch);

app.listen(port, () => console.log(`Server is running on ${port}`))