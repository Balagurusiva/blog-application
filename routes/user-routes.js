import express from 'express'
import { getAllUser , signup , login} from '../controller/user-controller.js'
import bodyParser from 'body-parser'

const routes = express.Router()


routes.get('/', getAllUser)
routes.post('/signup', signup)
routes.post('/login', login)

export default routes