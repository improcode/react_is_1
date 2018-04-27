import React from 'react'
import List from './List'
import Controls from './Controls'


class ToDo extends React.Component {
    state = {
        tasks: [
            {name: 'Umyj naczynia', uid: 1524821428763},
            {name: 'Wyprowadź psa', uid: 1524821428764}
        ],
        filterText: '',
        newTask: ''
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    addTask = () => {
        const newTask = {
            name: this.state.newTask,
            uid: Date.now()
        }
        const newTasks = this.state.tasks.concat(newTask)

        this.setState({
            tasks: newTasks,
            newTask: ''
        })
    }



    newTaskChangeHandler = (event, newValue) => this.setState({
        newTask: newValue
    })

    render() {
        return (
            <div>
                <Controls
                    onClickHandler={this.addTask}
                    onChangeHandler={this.newTaskChangeHandler}
                newTaskValue={this.state.newTask}
                />
                <List
                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                />
            </div>


        )
    }

}

export default ToDo