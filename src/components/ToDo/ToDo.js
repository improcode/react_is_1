import React from 'react'
import List from './List'


class ToDo extends React.Component {
    state = {
        tasks: [
            {name: 'Umyj naczynia', uid: 1524821428763},
            {name: 'Wyprowadź psa', uid: 1524821428764}
        ],
        filterText: ''
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    componentDidMount(){
        this.deleteTask(1524821428763)
    }

    render() {
        return (
            <div>
                <List
                    tasksList={this.state.tasks}
                />
            </div>


        )
    }

}

export default ToDo