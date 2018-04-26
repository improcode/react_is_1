import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'


import MyFirstComponent from './components/MyFirstComponent'
import Add from './components/Add'
import Header from './components/Header'
import MappingArray from './components/MappingArray'
import MappingArray2 from './components/MappingArray2'
import CounterWithState from './components/CounterWithState'
import Dashboard from './components/Dashboard'
import Hello from './components/Hello'
import SideBar from './components/SideBar'


class App extends React.Component {
    state = {
        isDrawerOpen: false
    }

    drawerBtnClickHandler = () => this.setState({
        isDrawerOpen: !this.state.isDrawerOpen
    })


    render() {

        return (

            <div>
                <AppBar
                    title="Pierwsza appka"
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                />
                <Router>
                    <div>
                        <SideBar
                            onRequestSideBarChange={this.drawerBtnClickHandler}
                            isSideBarOpen={this.state.isDrawerOpen}
                        />


                        <Route path={'/mapping-array'}
                               component={MappingArray}/>
                        <Route path={'/mapping-array-2'}
                               component={MappingArray2}/>
                        <Route path={'/counter'}
                               component={CounterWithState}/>
                        <Route exact
                               path={'/'}
                               component={Dashboard}/>
                        <Route exact
                               path={'/first'}
                               render={() => (
                                   <MyFirstComponent name={'Artur'}/>)}/>
                        <Route path={'/header'}
                               component={Header}
                               text={'PAAANIE, daj pan spokój'}/>
                        <Route path={'/add'}
                               component={Add}
                               numberA={5}
                               numberB={10}
                               isRed={false}/>
                        <Route path={'/hello/:name'}
                               component={Hello}/>

                    </div>
                </Router>
                {/*<MappingArray/>*/}
                {/*<hr/>*/}
                {/*<MappingArray2/>*/}
                {/*<hr/>*/}
                {/*<CounterWithState/>*/}
                {/*<hr/>*/}


                <Add numberA={5}
                     numberB={10}
                     isRed={false}/>
                <hr/>


            </div>
        )
    }
}


export default App;
