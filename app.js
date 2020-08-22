const app = require('express')()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./router/auth')
const postsRouter = require('./router/posts')

require('dotenv').config()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => res.send('Welcome to Auth-API'))
app.use('/user', authRouter)
app.use('/posts', postsRouter)

mongoose.connect(process.env.MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
      console.log('MongoDB connected!')
})

app.listen(process.env.PORT, () => console.log(`Server is up to: ${process.env.PORT}`))
