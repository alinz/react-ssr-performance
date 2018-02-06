import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import Html from '../client/html'
import App from '../client/app'

const app = express()

app.use('/static', express.static('public'))

const initialData = {
  name: 'World'
}

app.get('/', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Html initialData={JSON.stringify(initialData)}>
      <App {...initialData} name="World" />
    </Html>
  ).pipe(res)
})

app.listen(3000, () => {
  console.log('listening on port 3000...')
})
