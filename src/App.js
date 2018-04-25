import React from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'

const App = () => (
    <div>
        <Header text={'PAAANIE, daj pan spokój'}/>
        <MyFirstComponent name="Artur" age="28"/>
        <Add numberA={5} numberB={10} isRed={false}/>
        <hr/>
        <MappingArray/>
        <hr/>
        <MappingArray2/>
    </div>
)


export default App;
