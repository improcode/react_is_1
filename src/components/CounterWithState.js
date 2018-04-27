import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'


const styles = {
    btn: {
        margin: '10px'
    }
}


class CounterWithState extends React.Component {
    constructor() {
        super()

        this.state = {
            count: 0

        }

        this.minusBtnClick = () => this.setState({count: this.state.count - 1})
        this.plusBtnClick = () => this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        console.log('Counter is mounted!')
    }

    componentWillUnmount() {
        console.log('unmount counter')
    }

    componentDidUpdate() {
        console.log('did update')
    }

    componentWillUpdate() {
        console.log('will update')
    }

    render() {
        // const minusBtnClick = () => {this.setState({count: this.state.count - 1})}
        // const plusBtnClick = () => {this.setState({count: this.state.count + 1})}

        return (
            <div>
                <h1>{this.state.count}</h1>
                <div>
                    <RaisedButton
                        onClick={this.minusBtnClick}
                        label={'-'}
                        primary={true}
                        style={styles.btn}
                    />
                    <RaisedButton
                        onClick={this.plusBtnClick}
                        label={'+'}
                        secondary={true}
                        style={styles.btn}
                    />
                </div>
                <hr/>
            </div>
        )
    }

}

export default CounterWithState