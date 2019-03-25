const express = require('express')
// const bodyParser = require('body-parser')

const BucketlistCtrl = require('./controllers/BucketlistCtrl')

const app = express()
const port = 5555

app.use(express.json())

console.log(BucketlistCtrl.gettravel.toString())

app.get('/api/bucketlist/travel', BucketlistCtrl.gettravel)
app.get('/api/bucketlist/experience', BucketlistCtrl.getexperience)

app.post('/api/bucketlist/travel', BucketlistCtrl.createtravel)
app.post('/api/bucketlist/experience', BucketlistCtrl.createexperience)

app.put('/api/bucketlist/travel/:id', BucketlistCtrl.updatetravel)
app.put('/api/bucketlist/experience/:id', BucketlistCtrl.updateexperience)

app.delete('/api/bucketlist/travel/:id', BucketlistCtrl.deletetravel)
app.delete('/api/bucketlist/experience/:id', BucketlistCtrl.deleteexperience)

app.listen(port, () => {
    console.log('the magic is happening on port', port)
})