import * as express from 'express'
import * as bodyParser from 'body-parser'
import routes from './app/routes/home'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use('/', routes)
const port = process.env.PORT || 8888
app.listen(port)

export default app
