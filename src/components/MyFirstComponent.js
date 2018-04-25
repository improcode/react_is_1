import React from 'react'

const MyFirstComponent = (props) => {
    console.log(props)
    return <div>Hello world! I`m {props.name}.</div>
}

export default MyFirstComponent;