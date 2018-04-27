import React from 'react'
import Task from './Task'

const List = ({tasksList}) => (
    <div>
        {
            tasksList.map(task => (
                <Task
                    name={task.name}
                    key={task.uid}
                    deleteTask={() => alert('klikłem!')}
                />
            ))
        }

    </div>
)

export default List