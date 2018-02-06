import React from 'react'

const Html = props => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.markup }} />
        <script id="initial-data" type="text/plain" data-json={props.initialData} />
        <script src="/static/bundle.js" />
      </body>
    </html>
  )
}

export default Html
