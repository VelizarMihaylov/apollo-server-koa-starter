import 'module-alias/register'
import server from '@src/server'
import app from '@src/app'

server.applyMiddleware({ app })

app.listen({ port: 4444 }, () => console.log(`🚀 Server ready at http://localhost:4444${server.graphqlPath}`))
