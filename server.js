const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares);
/* server.get('/users', (req, res) => {
    res.jsonp(req.query)
});
   */

server.use(jsonServer.bodyParser);

router.render = (req, res) => {
    res.json(
      res.locals.data
    )
  }
  
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});

const app = express();

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('listening');
});