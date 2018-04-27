import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Container from '../UI/Container'


const Control = (props) => (
    <Container>
        <TextField
            onChange={props.onChangeHandler}
            value={props.newTaskValue}
            name={'new-task'}
            placeholder={'New Task'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
        <TextField
        onChange={props.onFilterChangeHandler}
        value={props.filterTaskValue}
        name={'filter-tasks'}
        placeholder={'Filter Tasks'}
        fullWidth={true}
        />
    </Container>
)

export default Control