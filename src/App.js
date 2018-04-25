import React from 'react'
import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'

const App = () => (
    <div>
        <Header text={'PAAANIE, daj pan spokój'}/>
        <MyFirstComponent name="Artur" age="28"/>
        <Add numberA={5} numberB={10}/>
    </div>
)


export default App;
