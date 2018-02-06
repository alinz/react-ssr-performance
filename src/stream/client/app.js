import React from 'react'

const List = props => {
  return <div />
}

const App = props => {
  let i = 0
  const size = Math.floor(Math.random() * 100) + 1

  const list = []
  for (i = 0; i < size; i++) {
    list.push(<div key={`id-${i}`}>Test {i}</div>)
  }

  return (
    <div>
      Hello {props.name}
      <div>{list}</div>
    </div>
  )
}

export default App
