import React from 'react'

const Hello = (props) => (
    <div>Hello world {props.match.params.name}!</div>
)

export default Hello