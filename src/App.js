import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from './components/CounterWithState'
import Dashboard from './components/Dashboard'


const App = () => (
    <div>
        <Router>

          <div>
              <Link to={'/'}> HOME </Link>
              <Link to={'/counter'}> Counter </Link>
              <Link to={'/mapping-array'}> MappingArray </Link>
              <Link to={'/mapping-array-2'}> MappingArray2 </Link>
              <hr/>
              <Route path={'/mapping-array'} component={MappingArray}/>
              <Route path={'/mapping-array-2'} component={MappingArray2}/>
              <Route path={'/counter'} component={CounterWithState}/>
              <Route exact path={'/'} component={Dashboard}/>

          </div>
        </Router>
        {/*<MappingArray/>*/}
        {/*<hr/>*/}
        {/*<MappingArray2/>*/}
        {/*<hr/>*/}
        {/*<CounterWithState/>*/}
        {/*<hr/>*/}


        <Header text={'PAAANIE, daj pan spokój'}/>
        <MyFirstComponent name="Artur"
                          age="28"/>
        <Add numberA={5}
             numberB={10}
             isRed={false}/>
        <hr/>


    </div>
)


export default App;
