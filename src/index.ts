import server from './server'
import app from './app'

server.applyMiddleware({ app })

app.listen({ port: 4444 }, () =>
  console.log(`🚀 Server ready at http://localhost:4444${server.graphqlPath}`)
)
