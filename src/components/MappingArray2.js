import React from 'react'

const men = [
    {name:'Darek', key: 1},
    {name:'Adam', key: 2},
    {name:'Bogdan', key: 3},
    {name:'Zdzich', key: 4},
]

const men2 = men.map(user => <div key ={user.key}>{user.key}. {user.name}</div>)

const MappingArray = (props) => (
    <div>
        {men2}
    </div>

)

export default MappingArray