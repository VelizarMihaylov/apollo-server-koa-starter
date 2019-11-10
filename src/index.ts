import 'module-alias/register'
import server from '@src/server'
import app from '@src/app'

const port = process.env.PORT || 4444
server.applyMiddleware({ app })

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
