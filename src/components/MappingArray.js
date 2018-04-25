import React from 'react'

const users = [
    {name:'Klaudiusz', key: 1},
    {name:'Kleofasa', key: 2},
    {name:'Ola', key: 3},
]

// const divs = [
//     <div key={1}>{names[0]}</div>,
//     <div key={2}> {names[1]}</div>,
//     <div key={3}>{names[2]}</div>
//
// ]

const MappingArray = (props) => (
    <div>
        {
            users.map(user => <div key ={user.key}>{user.name}</div>)

        }
    </div>

)

export default MappingArray