import React from 'react'

class CounterWithState extends React.Component {
    state = {
        count: 0

    }

    minusBtnClick = () => this.setState({count: this.state.count - 1})

    plusBtnClick = () => this.setState({count: this.state.count + 1})

    render() {
        // const minusBtnClick = () => {this.setState({count: this.state.count - 1})}
        //
        // const plusBtnClick = () => {this.setState({count: this.state.count + 1})}

        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.minusBtnClick}> - </button>
                    <button onClick={this.plusBtnClick}> + </button>
                </div>
                <hr/>
            </div>
        )
    }

}

export default CounterWithState